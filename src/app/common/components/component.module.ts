import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [TableComponent, UploadImageComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzEmptyModule,
    NzTableModule,
    NzUploadModule,
    NzModalModule,
  ],
  exports: [TableComponent, UploadImageComponent],
})
export class ComponentModule {}
