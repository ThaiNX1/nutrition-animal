import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { UserEntity, UsersService } from '../../../services';
import { DataResult } from '../../../common/common.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  tableServiceParam: any = {
    limit: 10,
    page: 1,
    sort: ['createdAt,ASC', 'fullName,ASC'],
    filter: [],
    join: ['role'],
  };
  data: any;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
    this.globalVariant.setHeader({
      title: 'Danh sách thành viên',
      buttonRight: {
        title: 'Thêm mới',
        url: '/user/create',
        type: 'primary',
      },
    });
  }

  getData(): void {
    this.globalVariant.setIsLoading(true);
    UsersService.getManyBase(this.tableServiceParam)
      .then((response: DataResult<UserEntity>) => {
        this.globalVariant.setIsLoading(false);
        this.data = response;
      })
      .catch((error) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(error.message);
      });
  }

  onEdit(item: UserEntity): void {
    this.router.navigate([`user/${item.id}`]);
  }
}
