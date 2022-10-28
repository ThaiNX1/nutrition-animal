import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { SettingRoutingModule } from './setting-routing.module';
import { IdRoleComponent } from './id-role/id-role.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../common/components/component.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ConfigSystemComponent } from './config-system/config-system.component';
import { IdConfigSystemComponent } from './id-config-system/id-config-system.component';

@NgModule({
  declarations: [
    RoleComponent,
    PermissionComponent,
    IdRoleComponent,
    ConfigSystemComponent,
    IdConfigSystemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingRoutingModule,
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
    ComponentModule,
    NzCheckboxModule,
    ReactiveFormsModule,
  ],
})
export class SettingModule {}
