import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthGuard} from './guard/logged-in-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./modules/setting/setting.module').then(
            (m) => m.SettingModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./modules/product-management/product-management.module').then(
            (m) => m.ProductManagementModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'nutrition',
        loadChildren: () =>
          import(
            './modules/nutrition-management/nutrition-management.module'
            ).then((m) => m.NutritionManagementModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'account',
        loadChildren: () =>
          import(
            './modules/account/account.module'
            ).then((m) => m.AccountModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
