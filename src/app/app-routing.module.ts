import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          )
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./modules/setting/setting.module').then(
            (m) => m.SettingModule
          )
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./modules/product-management/product-management.module').then(
            (m) => m.ProductManagementModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
