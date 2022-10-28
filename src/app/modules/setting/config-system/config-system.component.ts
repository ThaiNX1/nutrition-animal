import { Component, OnInit } from '@angular/core';
import {
  ConfigEntity,
  ConfigService,
  GetManyConfigEntityResponseDto,
  UserEntity,
  UsersService,
} from '../../../services';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import { DataResult } from '../../../common/common.model';

@Component({
  selector: 'app-config-system',
  templateUrl: './config-system.component.html',
  styleUrls: ['./config-system.component.scss'],
})
export class ConfigSystemComponent implements OnInit {
  tableServiceParam: any = {
    limit: 10,
    page: 1,
    sort: ['createdAt,ASC'],
    filter: [],
  };
  result = new GetManyConfigEntityResponseDto();

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    this.globalVariant.setHeader({
      title: 'Danh sách cấu hình hệ thống',
      buttonRight: {
        title: 'Thêm mới',
        url: '/config/create',
        type: 'primary',
      },
    });
  }

  getData(): void {
    this.globalVariant.setIsLoading(true);
    ConfigService.getManyBase(this.tableServiceParam)
      .then((response: GetManyConfigEntityResponseDto) => {
        this.globalVariant.setIsLoading(false);
        this.result = response;
      })
      .catch((error) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(error.message);
      });
  }

  onEdit(item: ConfigEntity): void {
    this.router.navigate([`config/${item.id}`]);
  }
}
