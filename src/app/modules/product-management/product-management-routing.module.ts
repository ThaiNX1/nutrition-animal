import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { IdProductCategoryComponent } from './product-category/id-product-category/id-product-category.component';
import { IdProductBrandComponent } from './product-brand/id-product-brand/id-product-brand.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'category',
    component: ProductCategoryComponent
  },
  {
    path: 'category/:id',
    component: IdProductCategoryComponent
  },
  {
    path: 'brand',
    component: ProductBrandComponent
  },
  {
    path: 'brand/:id',
    component: IdProductBrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule {
}
