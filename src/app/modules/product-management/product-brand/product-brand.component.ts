import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import { ProductCategoryEntity } from '../../../services';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.scss'],
})
export class ProductBrandComponent implements OnInit {
  data: any;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.globalVariant.setHeader({
      title: 'Danh sách thương hiệu',
      buttonRight: {
        title: 'Thêm mới',
        url: '/product/brand/create',
        type: 'primary',
      },
    });
  }
  onEdit(item: ProductCategoryEntity): void {
    this.router.navigate([`brand/${item.id}`]);
  }

  confirmDelete(item: ProductCategoryEntity): void {}
}
