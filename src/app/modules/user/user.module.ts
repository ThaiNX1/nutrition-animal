import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './index/user.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { IdUserComponent } from './id-user/id-user.component';
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
import { NzPopoverModule } from 'ng-zorro-antd/popover';

@NgModule({
  declarations: [UserComponent, IdUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
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
    NzPopoverModule,
  ],
})
export class UserModule {}
