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
    this.sidebarItems = [
      {
        name: 'Tổng quan',
        url: '/dashboard',
        icon: 'home',
        visible: true,
      },
      {
        name: 'Thành viên',
        url: '/user',
        icon: 'team',
        visible: true,
      },
      {
        name: 'Sản phẩm',
        url: '',
        icon: 'code-sandbox',
        children: [
          {
            name: 'Danh mục',
            url: '/product/category',
            icon: '',
            visible: true,
          },
          {
            name: 'Thương hiệu',
            url: '/product/brand',
            icon: '',
            visible: true,
          },
          {
            name: 'Dánh sách sản phẩm',
            url: '/product',
            icon: '',
            visible: true,
          },
        ],
      },
      {
        name: 'Cài đặt',
        url: '',
        icon: 'setting',
        children: [
          {
            name: 'Nhóm quyền',
            url: '/setting/role',
            icon: '',
            visible: true,
          },
          {
            name: 'Phân quyền',
            url: '/setting/permission',
            icon: '',
            visible: true,
          },
          {
            name: 'Cấu hình hệ thống',
            url: '/setting/config',
            icon: '',
            visible: true,
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
    this.cookie.delete('token');
    this.router.navigate(['auth/login']);
  }

  redirectLink(sidebarItem: INavData): void {
    this.router.navigate([sidebarItem.url]);
  }

  onClick(): void {
    this.router.navigate([this.header.buttonRight?.url]);
  }
}
