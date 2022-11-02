import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { GlobalVariable } from '../../common/global-variable';
import { INavData, navItems } from './nav/nav';
import axios, { AxiosRequestConfig } from 'axios';
import { serviceOptions } from '../../services/serviceOptions';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as Qs from 'qs';
import { CommonService } from '../../common/common.service';
import { environment } from 'src/environments/environment';
import { hasPermission } from '../../utils/util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, AfterViewChecked {
  isCollapsed = false;
  isLoading = false;
  header: any;
  sidebarItems: INavData[] = [];
  user: any = {};

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router,
    private cookie: CookieService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    const userCookie = this.cookie.get('tomeo_user');
    this.user = userCookie ? JSON.parse(userCookie) : {};
    this.sidebarItems = [
      {
        name: 'Tổng quan',
        url: '/dashboard',
        icon: 'home',
        visible: hasPermission(this.user, []),
      },
      {
        name: 'Thành viên',
        url: '/user',
        icon: 'team',
        visible: hasPermission(this.user, [
          'users_getOneBase',
          'users_getManyBase',
          'users_createOneBase',
          'users_updateOneBase',
        ]),
      },
      // {
      //   name: 'Sản phẩm',
      //   url: '',
      //   icon: 'code-sandbox',
      //   children: [
      //     {
      //       name: 'Danh mục',
      //       url: '/product/category',
      //       icon: '',
      //       visible: true,
      //     },
      //     {
      //       name: 'Thương hiệu',
      //       url: '/product/brand',
      //       icon: '',
      //       visible: true,
      //     },
      //     {
      //       name: 'Dánh sách sản phẩm',
      //       url: '/product',
      //       icon: '',
      //       visible: true,
      //     },
      //   ],
      // },
      {
        name: 'Dinh dưỡng',
        url: '',
        icon: 'code-sandbox',
        children: [
          {
            name: 'Nguyên liệu',
            url: '/nutrition/ingredient',
            icon: '',
            visible: hasPermission(this.user, [
              'ingredient_getOneBase',
              'ingredient_getManyBase',
              'ingredient_createOneBase',
            ]),
          },
          {
            name: 'Tính toán',
            url: '/nutrition/calculate',
            icon: '',
            visible: hasPermission(this.user, [
              'ingredientCalculate_IngredientCalculateController_nutrition-calculate',
              'ingredient_getManyBase',
            ]),
          },
          // {
          //   name: 'Thương hiệu',
          //   url: '/product/brand',
          //   icon: '',
          //   visible: true,
          // },
          // {
          //   name: 'Dánh sách sản phẩm',
          //   url: '/product',
          //   icon: '',
          //   visible: true,
          // },
        ],
      },
      {
        name: 'Cài đặt',
        url: '',
        icon: 'setting',
        visible: hasPermission(this.user, [
          'config_getOneBase',
          'config_getManyBase',
          'config_createOneBase',
          'config_updateOneBase',
        ]),
        children: [
          // {
          //   name: 'Nhóm quyền',
          //   url: '/setting/role',
          //   icon: '',
          //   visible: hasPermission(user, [
          //     'ingredient_getOneBase',
          //     'ingredient_getManyBase',
          //     'ingredient_createOneBase',
          //   ]),
          // },
          // {
          //   name: 'Phân quyền',
          //   url: '/setting/permission',
          //   icon: '',
          //   visible: hasPermission(user, [
          //     'ingredient_getOneBase',
          //     'ingredient_getManyBase',
          //     'ingredient_createOneBase',
          //   ]),
          // },
          {
            name: 'Cấu hình hệ thống',
            url: '/setting/config',
            icon: '',
            visible: hasPermission(this.user, [
              'config_getOneBase',
              'config_getManyBase',
              'config_createOneBase',
              'config_updateOneBase',
            ]),
          },
        ],
      },
      {
        name: 'Tài khoản',
        url: '',
        icon: 'usergroup-add',
        children: [
          {
            name: 'Hồ sơ',
            url: '/account/info',
            icon: '',
            visible: hasPermission(this.user, ['users_getOneBase']),
          },
          {
            name: 'Nạp tiền',
            url: '/account/donate',
            icon: '',
            visible: hasPermission(this.user, ['users_getOneBase']),
          },
        ],
      },
    ];

    this.globalVariant.isLoading.subscribe((value) => (this.isLoading = value));
    this.globalVariant.header.subscribe((value) => (this.header = value));
    let axiosConfig: AxiosRequestConfig = {
      baseURL: environment.serverApi,
      timeout: 60000, // 1 phút
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'repeat' });
      },
    };
    const userTokenData = jwt_decode(this.cookie.get('token'));
    if (userTokenData) {
      const token = this.cookie.get('token');
      axiosConfig = {
        ...axiosConfig,
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      };
      serviceOptions.axios = axios.create(axiosConfig);
    } else {
      this.router.navigate(['auth/login']);
    }
  }

  logOut(): void {
    this.cookie.deleteAll();
    this.router.navigate(['auth/login']);
  }

  redirectLink(sidebarItem: INavData): void {
    this.router.navigate([sidebarItem.url]);
  }

  onClick(): void {
    this.router.navigate([this.header.buttonRight?.url]);
  }
}
