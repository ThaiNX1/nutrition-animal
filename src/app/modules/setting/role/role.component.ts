import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import { EnumRoleEntityType, RolesService } from '../../../services';
import {
  ButtonType,
  ColumnValueType,
  TableProps,
} from '../../../common/components/table/table.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  dataServiceParam: TableProps = {
    service: RolesService.getManyBase,
    serviceParams: {
      filter: [`type||ne||${EnumRoleEntityType.admin}`],
      join: [],
      sort: [],
    },
    pagination: {
      current: 1,
      pageSize: 10,
      disabled: false,
    },
    columns: [
      {
        type: ColumnValueType.text,
        title: 'Tên nhóm quyền',
        fields: ['name'],
      },
      {
        type: ColumnValueType.text,
        title: 'Quyền',
        fields: ['type'],
      },
      {
        type: ColumnValueType.button,
        title: 'Thao tác',
        fields: ['btnActions'],
      },
    ],
    actions: [
      {
        type: ButtonType.edit,
        url: 'setting/role',
      },
    ],
  };
  data: any;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.globalVariant.setHeader({
      title: 'Danh sách nhóm quyền',
      buttonRight: {
        title: 'Thêm mới',
        url: '/setting/role/create',
        type: 'primary',
      },
    });
  }
}
