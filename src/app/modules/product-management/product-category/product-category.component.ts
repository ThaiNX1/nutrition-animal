import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import { CategoriesService, ProductCategoryEntity } from '../../../services';
import { DataResult } from '../../../common/common.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent implements OnInit {
  tableServiceParam: any = {
    limit: 10,
    page: 1,
    sort: ['createdAt,ASC'],
    filter: [],
    join: ['parent'],
  };
  data = new DataResult<ProductCategoryEntity>();

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.globalVariant.setHeader({
      title: 'Danh sách danh mục',
      buttonRight: {
        title: 'Thêm mới',
        url: '/product/category/create',
        type: 'primary',
      },
    });
    await this.getCategories(this.tableServiceParam);
  }

  async getCategories(params: any) {
    await CategoriesService.getManyBase(params)
      .then((response) => {
        this.data = response;
      })
      .catch((err) => {
        return;
      });
  }

  onEdit(item: ProductCategoryEntity): void {
    this.router.navigate([`category/${item.id}`]);
  }

  confirmDelete(item: ProductCategoryEntity): void {}

  async onPageChange(event: any) {
    this.tableServiceParam.page = event;
    await this.getCategories(this.tableServiceParam);
  }
}
