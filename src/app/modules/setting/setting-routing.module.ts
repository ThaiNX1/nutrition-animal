import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { IdRoleComponent } from './id-role/id-role.component';

const routes: Routes = [
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'role/:id',
    component: IdRoleComponent,
  },
  {
    path: 'permission',
    component: PermissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
