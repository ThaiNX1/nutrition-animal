import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NotiType } from './constant';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private notification: NzNotificationService,
    private cookie: CookieService
  ) {}

  /**
   * Tạo thông báo
   * @param type
   * @param title
   * @param message
   */
  createNotification(type: NotiType, title: string, message: string): void {
    this.notification.create(type, title, message);
  }

  /**
   * Thông báo lỗi
   * @param message
   */
  alertError(message: string, error?: any): void {
    let msg = '';
    if (typeof error?.response?.data === 'object') {
      msg =
        error?.response?.data?.message?.message ||
        error?.response?.data?.message;
    }
    this.notification.create(
      NotiType.ERROR,
      'Thông báo',
      error ? msg : message
    );
  }

  /**
   * Thông báo thành công
   * @param message
   */
  alertSuccess(message: string): void {
    this.notification.create(NotiType.SUCCESS, 'Thông báo', message);
  }

  /**
   * Thông báo cảnh báo
   * @param message
   */
  alertWarning(message: string): void {
    this.notification.create(NotiType.WARNING, 'Thông báo', message);
  }

  /**
   * Lấy thông tin người dùng đăng nhập
   */
  getUserInfo(): Auth {
    const token = this.cookie.get('token');
    return jwt_decode(token) as Auth;
  }

  /**
   * Kiểm tra quyền
   * @param permisions
   */
  hasPermission(permisions: string[]): boolean {
    const userPermissions = this.getUserInfo()?.permissions;
    if (userPermissions?.length > 0) {
      return userPermissions?.some((per) => permisions.includes(per));
    }
    return false;
  }

  /**
   * Validate form
   * @param form
   */
  validateForm(form: any): boolean {
    if (form.valid) {
      return true;
    } else {
      Object.values(form.controls).forEach((control: any) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return false;
    }
  }
}

export interface Auth {
  username: string;
  tel?: string;
  fullName?: string;
  permissions: string[];
  roleId: number;
  type: string;
  iss?: string;
  sub?: string;
  aud?: string[] | string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
}
