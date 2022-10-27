import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ProductCategoryEntity } from '../../../../services';
import { GlobalVariable } from '../../../../common/global-variable';
import { CommonService } from '../../../../common/common.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-id-product-brand',
  templateUrl: './id-product-brand.component.html',
  styleUrls: ['./id-product-brand.component.scss'],
})
export class IdProductBrandComponent implements OnInit, AfterViewInit {
  @ViewChild('btnSave') btnSave?: TemplateRef<any>;
  isView: boolean = false;
  query: any;
  brand?: ProductCategoryEntity;
  brandForm: any;
  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngAfterViewInit(): void {
    this.globalVariant.setHeader({
      backIcon: true,
      title:
        this.query === 'create'
          ? 'Thêm thương hiệu mới'
          : !isNaN(this.query)
          ? 'Chỉnh sửa thương hiệu'
          : 'Chi tiết thương hiệu',
      template: this.btnSave,
    });
  }
  ngOnInit(): void {
    this.query = this.activeRouter.snapshot.paramMap.get('id');
    this.brandForm = this.fb.group({
      brandName: ['', Validators.required],
      brandCode: ['', Validators.required],
    });
  }

  onSave(): void {
    console.log('btnSave');
  }
}
