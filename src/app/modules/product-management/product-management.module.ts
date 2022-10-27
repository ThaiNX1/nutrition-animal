import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductComponent } from './product/product.component';
import { IdProductCategoryComponent } from './product-category/id-product-category/id-product-category.component';
import { IdProductBrandComponent } from './product-brand/id-product-brand/id-product-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ComponentModule } from '../../common/components/component.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCategoryComponent,
    ProductBrandComponent,
    IdProductCategoryComponent,
    IdProductBrandComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductManagementRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzEmptyModule,
    NzTagModule,
    NzIconModule,
    NzPopconfirmModule,
    NzGridModule,
    NzFormModule,
    NzSelectModule,
    NzCardModule,
    NzInputModule,
    NzDatePickerModule,
    NzUploadModule,
    ComponentModule,
  ],
})
export class ProductManagementModule {}
