import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CategoriesService, ProductCategoryEntity } from '../../../../services';
import { GlobalVariable } from '../../../../common/global-variable';
import { CommonService } from '../../../../common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-id-product-category',
  templateUrl: './id-product-category.component.html',
  styleUrls: ['./id-product-category.component.scss'],
})
export class IdProductCategoryComponent implements OnInit, AfterViewInit {
  @ViewChild('btnSave') btnSave?: TemplateRef<any>;
  isView: boolean = false;
  query: any;
  category = new ProductCategoryEntity();
  categoryForm: any;
  imageList: NzUploadFile[] = [];
  categories: ProductCategoryEntity[] = [];

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.globalVariant.setHeader({
      backIcon: true,
      title:
        this.query === 'create'
          ? 'Thêm danh mục mới'
          : !isNaN(this.query)
          ? 'Chỉnh sửa danh mục'
          : 'Chi tiết danh mục',
      template: this.btnSave,
    });
  }

  async ngOnInit() {
    this.query = this.activeRouter.snapshot.paramMap.get('id');
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      categoryCode: ['', Validators.required],
      categoryParent: [''],
    });
    if (this.query) await this.getCategoryDetail(this.query);
    await this.getCategories();
  }

  async getCategoryDetail(id: number) {
    await CategoriesService.getOneBase({
      id: id,
      join: 'parent',
    }).then((response) => {
      this.category = response;
    });
  }

  async getCategories() {
    await CategoriesService.getManyBase({
      page: 1,
      limit: 1000,
    })
      .then((response) => {
        this.categories = response?.data || [];
      })
      .catch((err) => {
        return;
      });
  }

  async onSave() {
    if (this.categoryForm?.invalid) {
      this.common.alertWarning('Các trường bắt buộc không được trống');
      return;
    }
    await CategoriesService.createOneBase({ body: this.category })
      .then((response) => {
        this.common.alertSuccess('Thêm mới thành công');
        this.router.navigate(['/product/category']);
      })
      .catch((err) => {
        this.common.alertError('Thêm mới thất bại');
        return;
      });
  }

  getUrlImage(event: string) {
    this.category.image = event;
    this.imageList.push({
      url: event,
      name: '',
      uid: '',
    });
  }
}
