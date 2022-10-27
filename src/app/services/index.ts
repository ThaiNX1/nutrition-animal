/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import { IRequestOptions, IRequestConfig, getConfigs, axios } from './serviceOptions';
export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class AuthService {
  /**
   * Đăng nhập bằng Email/Password
   */
  static authControllerLogin(
    params: {
      /** requestBody */
      body?: LoginDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Đăng ký tài khoản
   */
  static authControllerRegister(
    params: {
      /** requestBody */
      body?: RegisterDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/register';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Xác thực tài khoản
   */
  static authControllerVerifyAccount(
    params: {
      /** requestBody */
      body?: VerifyOtpDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/verify-account';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Gửi OTP
   */
  static authControllerSendOtpForgotPassword(
    params: {
      /** requestBody */
      body?: SendOtpForgotPasswordDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/send-otp-forgot-password';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Xác thực mã OTP đổi mật khẩu
   */
  static authControllerResetPassword(
    params: {
      /** requestBody */
      body?: ResetPasswordDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/auth/reset-password';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class UsersService {
  /**
   * Chi tiết Thành viên
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Thành viên
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: UserEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Thành viên
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyUserEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Thành viên
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: UserEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/users';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ProvincesService {
  /**
   *
   */
  static provinceControllerSyncGhnProvince(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces/update-province';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Chi tiết Tỉnh/thành
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Tỉnh/thành
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ProvinceEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Tỉnh/thành
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyProvinceEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Tỉnh/thành
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ProvinceEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProvinceEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/provinces';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DistrictsService {
  /**
   * Chi tiết Quận/huyện
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistrictEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Quận/huyện
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: DistrictEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistrictEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Quận/huyện
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyDistrictEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Quận/huyện
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: DistrictEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistrictEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/districts';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class RolesService {
  /**
   * Thêm Role
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: RoleEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Role
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyRoleEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Role
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: RoleEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Chi tiết Role
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RoleEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách chức năng
   */
  static roleControllerRoutes(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/routes';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Cập nhật nhiều nhóm Quyền
   */
  static roleControllerUpdateMany(
    params: {
      /** requestBody */
      body?: RoleEntity[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/roles/bulk';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ConfigService {
  /**
   * Chi tiết Cấu hình
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ConfigEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Cấu hình
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ConfigEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ConfigEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Cấu hình
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyConfigEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Cấu hình
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ConfigEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ConfigEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/config';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class CategoriesService {
  /**
   * Chi tiết Danh mục
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductCategoryEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/categories/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Danh mục
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ProductCategoryEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductCategoryEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/categories/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Danh mục
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyProductCategoryEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/categories';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Danh mục
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ProductCategoryEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductCategoryEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/categories';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class BrandsService {
  /**
   * Chi tiết Thương hiệu
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductBrandEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/brands/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Thương hiệu
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ProductBrandEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductBrandEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/brands/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Thương hiệu
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyProductBrandEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/brands';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Thương hiệu
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ProductBrandEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductBrandEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/brands';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class CdnService {
  /**
   * Upload media
   */
  static cdnControllerUploadFile(
    params: {
      /**  */
      files: [];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cdn/upload';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['files']) {
        if (Object.prototype.toString.call(params['files']) === '[object Array]') {
          for (const item of params['files']) {
            data.append('files', item as any);
          }
        } else {
          data.append('files', params['files'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Upload ingredient index
   */
  static cdnControllerUploadIngredientIndex(
    params: {
      /**  */
      files: [];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cdn/upload-ingredient-index';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['files']) {
        if (Object.prototype.toString.call(params['files']) === '[object Array]') {
          for (const item of params['files']) {
            data.append('files', item as any);
          }
        } else {
          data.append('files', params['files'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Upload ingredient
   */
  static cdnControllerUploadIngredient(
    params: {
      /**  */
      files: [];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/cdn/upload-ingredient';

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['files']) {
        if (Object.prototype.toString.call(params['files']) === '[object Array]') {
          for (const item of params['files']) {
            data.append('files', item as any);
          }
        } else {
          data.append('files', params['files'] as any);
        }
      }

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class IngredientService {
  /**
   * Chi tiết Nguyên liệu
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<IngredientEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/ingredient/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Nguyên liệu
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: IngredientEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<IngredientEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/ingredient/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Nguyên liệu
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyIngredientEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/ingredient';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Nguyên liệu
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: IngredientEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<IngredientEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/ingredient';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class ProductsService {
  /**
   * Chi tiết Sản phẩm
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Sản phẩm
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: ProductEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Sản phẩm
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyProductEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Sản phẩm
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: ProductEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ProductEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/products';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class OrdersService {
  /**
   * Chi tiết Đơn hàng
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OrderEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/orders/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Đơn hàng
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: OrderEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OrderEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/orders/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Đơn hàng
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyOrderEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/orders';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Đơn hàng
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: OrderEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OrderEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/orders';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class WarehousesService {
  /**
   * Chi tiết Kho
   */
  static getOneBase(
    params: {
      /**  */
      id: number;
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WarehouseEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/warehouses/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { fields: params['fields'], join: params['join'], cache: params['cache'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Sửa Kho
   */
  static updateOneBase(
    params: {
      /**  */
      id: number;
      /** requestBody */
      body?: WarehouseEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WarehouseEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/warehouses/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Danh sách Kho
   */
  static getManyBase(
    params: {
      /** Selects resource fields. <a href="https://github.com/nestjsx/crud/wiki/Requests#select" target="_blank">Docs</a> */
      fields?: any | null[];
      /** Adds search condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#search" target="_blank">Docs</a> */
      s?: string;
      /** Adds filter condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#filter" target="_blank">Docs</a> */
      filter?: any | null[];
      /** Adds OR condition. <a href="https://github.com/nestjsx/crud/wiki/Requests#or" target="_blank">Docs</a> */
      or?: any | null[];
      /** Adds sort by field. <a href="https://github.com/nestjsx/crud/wiki/Requests#sort" target="_blank">Docs</a> */
      sort?: any | null[];
      /** Adds relational resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#join" target="_blank">Docs</a> */
      join?: any | null[];
      /** Limit amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#limit" target="_blank">Docs</a> */
      limit?: number;
      /** Offset amount of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#offset" target="_blank">Docs</a> */
      offset?: number;
      /** Page portion of resources. <a href="https://github.com/nestjsx/crud/wiki/Requests#page" target="_blank">Docs</a> */
      page?: number;
      /** Reset cache (if was enabled). <a href="https://github.com/nestjsx/crud/wiki/Requests#cache" target="_blank">Docs</a> */
      cache?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GetManyWarehouseEntityResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/warehouses';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        fields: params['fields'],
        s: params['s'],
        filter: params['filter'],
        or: params['or'],
        sort: params['sort'],
        join: params['join'],
        limit: params['limit'],
        offset: params['offset'],
        page: params['page'],
        cache: params['cache']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Thêm Kho
   */
  static createOneBase(
    params: {
      /** requestBody */
      body?: WarehouseEntity;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WarehouseEntity> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/warehouses';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class IngredientCalculateService {
  /**
   * Tính thành phần dinh dưỡng
   */
  static ingredientCalculateControllerCalculateNutrition(
    params: {
      /** requestBody */
      body?: CalculateRequestDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CalculateResponseDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/ingredientCalculate/nutrition-calculate';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class LoginDto {
  /** Số điện thoại */
  'tel': string;

  /** Mật khẩu */
  'password': string;

  /** Loại đăng nhập (App\/Web) */
  'type'?: EnumLoginDtoType;

  constructor(data: undefined | any = {}) {
    this['tel'] = data['tel'];
    this['password'] = data['password'];
    this['type'] = data['type'];
  }
}

export class LoginResponse {
  /** Access token */
  'token': string;

  constructor(data: undefined | any = {}) {
    this['token'] = data['token'];
  }
}

export class RegisterDto {
  /** Email */
  'email'?: string;

  /** Mật khẩu */
  'password': string;

  /** Tên */
  'fullName': string;

  /** Số điện thoại */
  'tel': string;

  /** Phường\/Xã */
  'wardId'?: number;

  /** Ngày sinh */
  'dob'?: Date;

  /** Giới tính */
  'gender': EnumRegisterDtoGender;

  /** Mã người giới thiệu */
  'referralCode'?: string;

  constructor(data: undefined | any = {}) {
    this['email'] = data['email'];
    this['password'] = data['password'];
    this['fullName'] = data['fullName'];
    this['tel'] = data['tel'];
    this['wardId'] = data['wardId'];
    this['dob'] = data['dob'];
    this['gender'] = data['gender'];
    this['referralCode'] = data['referralCode'];
  }
}

export class GetManyUserEntityResponseDto {
  /**  */
  'data': UserEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class UserEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Email */
  'email'?: string;

  /** Mật khẩu */
  'password': string;

  /** Lưu các mật khẩu cũ */
  'passwordHistory'?: string[];

  /** Tên */
  'fullName': string;

  /** Số điện thoại */
  'tel': string;

  /** Role ID */
  'roleId'?: number;

  /** Danh sách cấp dưới  */
  'referralChildren'?: UserEntity[];

  /** Id cấp trên */
  'referralParentId'?: number;

  /** Cấp trên */
  'referralParent'?: CombinedReferralParentTypes;

  /** Session sau khi gửi xác nhận SĐT với Firebase */
  'sessionVerifyCode'?: string;

  /** Số CMTND\/CCCD */
  'nationalId'?: string;

  /** Ngày cấp */
  'nationalIssueDate'?: Date;

  /** Nơi cấp */
  'nationalIssueBy'?: string;

  /** Địa chỉ */
  'address'?: string;

  /** Phường\/Xã */
  'wardId'?: number;

  /** Số tài khoản */
  'bankNumber'?: string;

  /** Chủ tài khoản */
  'bankAccountName'?: string;

  /** Chi nhánh ngân hàng */
  'bankBranch'?: string;

  /** Ngày sinh */
  'dob'?: Date;

  /** Giới tính */
  'gender': EnumUserEntityGender;

  /** Trạng thái */
  'status': EnumUserEntityStatus;

  /** Ảnh đại diện */
  'avatar'?: string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['email'] = data['email'];
    this['password'] = data['password'];
    this['passwordHistory'] = data['passwordHistory'];
    this['fullName'] = data['fullName'];
    this['tel'] = data['tel'];
    this['roleId'] = data['roleId'];
    this['referralChildren'] = data['referralChildren'];
    this['referralParentId'] = data['referralParentId'];
    this['referralParent'] = data['referralParent'];
    this['sessionVerifyCode'] = data['sessionVerifyCode'];
    this['nationalId'] = data['nationalId'];
    this['nationalIssueDate'] = data['nationalIssueDate'];
    this['nationalIssueBy'] = data['nationalIssueBy'];
    this['address'] = data['address'];
    this['wardId'] = data['wardId'];
    this['bankNumber'] = data['bankNumber'];
    this['bankAccountName'] = data['bankAccountName'];
    this['bankBranch'] = data['bankBranch'];
    this['dob'] = data['dob'];
    this['gender'] = data['gender'];
    this['status'] = data['status'];
    this['avatar'] = data['avatar'];
  }
}

export class VerifyOtpDto {
  /** Firebase Token */
  'idToken': string;

  /** Số điện thoại */
  'tel': string;

  constructor(data: undefined | any = {}) {
    this['idToken'] = data['idToken'];
    this['tel'] = data['tel'];
  }
}

export class SendOtpForgotPasswordDto {
  /** Số điện thoại reset mật khẩu */
  'tel': string;

  /** Recaptcha Token */
  'recaptchaToken': string;

  constructor(data: undefined | any = {}) {
    this['tel'] = data['tel'];
    this['recaptchaToken'] = data['recaptchaToken'];
  }
}

export class ResetPasswordDto {
  /** Mật khẩu */
  'password': string;

  /** Số điện thoại */
  'tel': string;

  /** Firebase Token */
  'idToken': string;

  constructor(data: undefined | any = {}) {
    this['password'] = data['password'];
    this['tel'] = data['tel'];
    this['idToken'] = data['idToken'];
  }
}

export class GetManyProvinceEntityResponseDto {
  /**  */
  'data': ProvinceEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class ProvinceEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Tên Tỉnh\/thành */
  'name': string;

  /** Mã tỉnh\/tp */
  'code': string;

  /** Mã tên tỉnh\/tp */
  'codeName': string;

  /** Loại */
  'divisionType': string;

  /** Mã điện thoại */
  'phoneCode': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['name'] = data['name'];
    this['code'] = data['code'];
    this['codeName'] = data['codeName'];
    this['divisionType'] = data['divisionType'];
    this['phoneCode'] = data['phoneCode'];
  }
}

export class GetManyDistrictEntityResponseDto {
  /**  */
  'data': DistrictEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class DistrictEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Tên Quận\/huyện */
  'name': string;

  /** Mã Quận\/huyện */
  'code': string;

  /** Mã tên Quận\/huyện */
  'codeName': string;

  /** Loại */
  'divisionType': string;

  /** ID Tỉnh\/thành */
  'provinceId': number;

  /** Thông tin Tỉnh\/thành */
  'province'?: CombinedProvinceTypes;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['name'] = data['name'];
    this['code'] = data['code'];
    this['codeName'] = data['codeName'];
    this['divisionType'] = data['divisionType'];
    this['provinceId'] = data['provinceId'];
    this['province'] = data['province'];
  }
}

export class GetManyRoleEntityResponseDto {
  /**  */
  'data': RoleEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class RoleEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Tên nhóm */
  'name': string;

  /** Quyền */
  'permissions': string[];

  /** Loại quyền */
  'type': EnumRoleEntityType;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['name'] = data['name'];
    this['permissions'] = data['permissions'];
    this['type'] = data['type'];
  }
}

export class GetManyConfigEntityResponseDto {
  /**  */
  'data': ConfigEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class ConfigBanner {
  /** Link ảnh */
  'url': string;

  /** Nội dung */
  'content': string;

  constructor(data: undefined | any = {}) {
    this['url'] = data['url'];
    this['content'] = data['content'];
  }
}

export class ConfigEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Kiểu cấu hình */
  'key': EnumConfigEntityKey;

  /** Tên cấu hình */
  'name'?: string;

  /** Các thuộc tính cấu hình */
  'value': ConfigBanner[];

  /** Ngày bắt đầu được áp dụng */
  'startDate': Date;

  /** Ngày kết thúc áp dụng */
  'endDate': Date;

  /** Ghi chú */
  'note': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['key'] = data['key'];
    this['name'] = data['name'];
    this['value'] = data['value'];
    this['startDate'] = data['startDate'];
    this['endDate'] = data['endDate'];
    this['note'] = data['note'];
  }
}

export class GetManyProductCategoryEntityResponseDto {
  /**  */
  'data': ProductCategoryEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class ProductCategoryEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Mã danh mục */
  'code': string;

  /** Ảnh danh mục */
  'image': string;

  /** Tên danh mục */
  'name': string;

  /** Mô tả danh mục */
  'description': string;

  /** Danh sách cấp dưới  */
  'childrens'?: ProductCategoryEntity[];

  /** Danh mục cha */
  'parentId'?: number;

  /** Danh mục cha */
  'parent'?: CombinedParentTypes;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['code'] = data['code'];
    this['image'] = data['image'];
    this['name'] = data['name'];
    this['description'] = data['description'];
    this['childrens'] = data['childrens'];
    this['parentId'] = data['parentId'];
    this['parent'] = data['parent'];
  }
}

export class GetManyProductBrandEntityResponseDto {
  /**  */
  'data': ProductBrandEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class ProductBrandEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Mã thương hiệu */
  'code': string;

  /** Ảnh thương hiệu */
  'image': string;

  /** Tên thương hiệu */
  'name': string;

  /** Mô tả thương hiệu */
  'description': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['code'] = data['code'];
    this['image'] = data['image'];
    this['name'] = data['name'];
    this['description'] = data['description'];
  }
}

export class GetManyIngredientEntityResponseDto {
  /**  */
  'data': IngredientEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class IngredientEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Tên nguyên liệu */
  'name': string;

  /** Tên khác nguyên liệu */
  'otherName'?: string;

  /** Mã nguyên liệu */
  'code': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['name'] = data['name'];
    this['otherName'] = data['otherName'];
    this['code'] = data['code'];
  }
}

export class GetManyProductEntityResponseDto {
  /**  */
  'data': ProductEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class ProductVariantEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Id sản phẩm */
  'productId'?: number;

  /** Sản phẩm */
  'product'?: CombinedProductTypes;

  /** Tên biến thể "Thuộc tính 1,Thuộc tính 2" */
  'name': string;

  /** Hình ảnh biến thể */
  'images'?: string[];

  /** Giá biến thể sản phẩm */
  'price': number;

  /** Mã Sku */
  'SKU'?: string;

  /** Giá trước khi giảm */
  'priceBeforeDiscount': number;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['productId'] = data['productId'];
    this['product'] = data['product'];
    this['name'] = data['name'];
    this['images'] = data['images'];
    this['price'] = data['price'];
    this['SKU'] = data['SKU'];
    this['priceBeforeDiscount'] = data['priceBeforeDiscount'];
  }
}

export class ProductEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Mã sản phẩm */
  'SKU': string;

  /** Ảnh sản phẩm */
  'images': string[];

  /** Tên sản phẩm */
  'name': string;

  /** Mô tả sản phẩm */
  'description': string;

  /** Giá sản phẩm\/Giá thấp nhất của sản phẩm */
  'price': number;

  /** Giá trước khi giảm */
  'priceBeforeDiscount': number;

  /** Khối lượng (ĐVT: gram) */
  'weight': number;

  /** Chiều cao */
  'height'?: number;

  /** Chiều dài */
  'length'?: number;

  /** Chiều rộng */
  'width'?: number;

  /** Id Danh mục sản phẩm */
  'productCategoryId': number;

  /** Id Thương hiệu sản phẩm */
  'productBrandId': number;

  /** Trạng thái */
  'status': EnumProductEntityStatus;

  /** Tag sản phẩm */
  'tag'?: string;

  /** Danh mục */
  'productCategory': CombinedProductCategoryTypes;

  /** Thương hiệu */
  'productBrand': CombinedProductBrandTypes;

  /** Biến thể */
  'variants'?: ProductVariantEntity[];

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['SKU'] = data['SKU'];
    this['images'] = data['images'];
    this['name'] = data['name'];
    this['description'] = data['description'];
    this['price'] = data['price'];
    this['priceBeforeDiscount'] = data['priceBeforeDiscount'];
    this['weight'] = data['weight'];
    this['height'] = data['height'];
    this['length'] = data['length'];
    this['width'] = data['width'];
    this['productCategoryId'] = data['productCategoryId'];
    this['productBrandId'] = data['productBrandId'];
    this['status'] = data['status'];
    this['tag'] = data['tag'];
    this['productCategory'] = data['productCategory'];
    this['productBrand'] = data['productBrand'];
    this['variants'] = data['variants'];
  }
}

export class GetManyOrderEntityResponseDto {
  /**  */
  'data': OrderEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class WardEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Tên Phường\/Xã */
  'name': string;

  /** Mã Quận\/huyện */
  'code': string;

  /** Mã tên Quận\/huyện */
  'codeName': string;

  /** Loại */
  'divisionType': string;

  /** ID của Quận\/Huyện */
  'districtId': number;

  /** Thông tin Quận\/huyện */
  'district'?: CombinedDistrictTypes;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['name'] = data['name'];
    this['code'] = data['code'];
    this['codeName'] = data['codeName'];
    this['divisionType'] = data['divisionType'];
    this['districtId'] = data['districtId'];
    this['district'] = data['district'];
  }
}

export class OrderEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Mã đơn hàng */
  'code': string;

  /** Trạng thái đơn hàng */
  'status': EnumOrderEntityStatus;

  /** Địa chỉ */
  'shippingAddress': string;

  /** ID Phường\/Xã */
  'wardId'?: number;

  /** Phường\/Xã */
  'ward': CombinedWardTypes;

  /** Số điện thoại */
  'tel': string;

  /** Phí ship */
  'shippingFee'?: number;

  /** Tổng tiền */
  'total'?: number;

  /** Giảm giá */
  'discount'?: number;

  /** Phương thức thanh toán */
  'paymentType'?: EnumOrderEntityPaymentType;

  /** Ghi chú của KH\/CTV */
  'note'?: string;

  /** Lý do huỷ */
  'cancel_reason'?: string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['code'] = data['code'];
    this['status'] = data['status'];
    this['shippingAddress'] = data['shippingAddress'];
    this['wardId'] = data['wardId'];
    this['ward'] = data['ward'];
    this['tel'] = data['tel'];
    this['shippingFee'] = data['shippingFee'];
    this['total'] = data['total'];
    this['discount'] = data['discount'];
    this['paymentType'] = data['paymentType'];
    this['note'] = data['note'];
    this['cancel_reason'] = data['cancel_reason'];
  }
}

export class GetManyWarehouseEntityResponseDto {
  /**  */
  'data': WarehouseEntity[];

  /**  */
  'count': number;

  /**  */
  'total': number;

  /**  */
  'page': number;

  /**  */
  'pageCount': number;

  constructor(data: undefined | any = {}) {
    this['data'] = data['data'];
    this['count'] = data['count'];
    this['total'] = data['total'];
    this['page'] = data['page'];
    this['pageCount'] = data['pageCount'];
  }
}

export class WarehouseEntity {
  /** ID */
  'id'?: number;

  /** Thời gian tạo */
  'createdAt'?: Date;

  /** Thời gian cập nhật */
  'updatedAt'?: Date;

  /** Id sản phẩm */
  'productId': number;

  /** Id biến tể */
  'variantId'?: number;

  /** Số lượng tồn kho */
  'quantity': number;

  /** Số lượng tồn tối thiểu */
  'minQuantity': number;

  /** Tên kho */
  'name': string;

  /** Sđt kho */
  'tel': string;

  /** Id xã\/phường */
  'wardId': number;

  /** Địa chỉ cụ thể */
  'address': string;

  constructor(data: undefined | any = {}) {
    this['id'] = data['id'];
    this['createdAt'] = data['createdAt'];
    this['updatedAt'] = data['updatedAt'];
    this['productId'] = data['productId'];
    this['variantId'] = data['variantId'];
    this['quantity'] = data['quantity'];
    this['minQuantity'] = data['minQuantity'];
    this['name'] = data['name'];
    this['tel'] = data['tel'];
    this['wardId'] = data['wardId'];
    this['address'] = data['address'];
  }
}

export class IngredientRequest {
  /** Mã nguyên liệu */
  'code': string;

  /** Khối lượng nguyên liệu */
  'weight': number;

  /** Đơn giá nguyên liệu */
  'price': number;

  constructor(data: undefined | any = {}) {
    this['code'] = data['code'];
    this['weight'] = data['weight'];
    this['price'] = data['price'];
  }
}

export class CalculateRequestDto {
  /** Danh sách nguyên liệu */
  'ingredients': IngredientRequest[];

  /** Loại động vật */
  'animalType': EnumCalculateRequestDtoAnimalType;

  constructor(data: undefined | any = {}) {
    this['ingredients'] = data['ingredients'];
    this['animalType'] = data['animalType'];
  }
}

export class CalculateItem {
  constructor(data: undefined | any = {}) {}
}

export class CalculateResponseDto {
  /** Vật chất khô */
  'DryMatter': CombinedDryMatterTypes;

  /** ME, Heo\/ME, Gia cẩm */
  'ME': CombinedMETypes;

  /** Đạm thô */
  'CrudeProtein': CombinedCrudeProteinTypes;

  /** Béo */
  'Fat': CombinedFatTypes;

  /** Xơ thô */
  'CrudeFiber': CombinedCrudeFiberTypes;

  /** Lysine, Total */
  'LysineTotal': CombinedLysineTotalTypes;

  /** Methionine, Total */
  'MethionineTotal': CombinedMethionineTotalTypes;

  /** Met + Cys, Total */
  'MetCysTotal': CombinedMetCysTotalTypes;

  /** Threonine, Total */
  'ThreonineTotal': CombinedThreonineTotalTypes;

  /** Tryptophan, Total */
  'TryptophanTotal': CombinedTryptophanTotalTypes;

  /** Lactose */
  'Lactose': CombinedLactoseTypes;

  /** LYS, TH Heo\/LYS, TH Gia cầm */
  'LYS_TH': CombinedLYSTHTypes;

  /** MET, TH Heo\/MET, TH Gia cầm */
  'MET_TH': CombinedMETTHTypes;

  /** M+C, TH Heo\/M+C, TH Gia cầm */
  'MC_TH': CombinedMCTHTypes;

  /** THR, TH Heo\/THR, TH Gia cầm */
  'THR_TH': CombinedTHRTHTypes;

  /** TRP, TH Heo\/TRP, TH Gia cầm */
  'TRP_TH': CombinedTRPTHTypes;

  /** Calcium (Ca) */
  'Calcium': CombinedCalciumTypes;

  /** Phosphorus, Total */
  'PhosphorusTotal': CombinedPhosphorusTotalTypes;

  /** Phosphorus, availability */
  'PhosphorusAvail': CombinedPhosphorusAvailTypes;

  /** Sodium (Na) */
  'Sodium': CombinedSodiumTypes;

  /** Chloride (Cl) */
  'Chloride': CombinedChlorideTypes;

  /** Muối (NaCl) */
  'Salt': CombinedSaltTypes;

  /** Linoleic Acid */
  'LinoleicAcid': CombinedLinoleicAcidTypes;

  constructor(data: undefined | any = {}) {
    this['DryMatter'] = data['DryMatter'];
    this['ME'] = data['ME'];
    this['CrudeProtein'] = data['CrudeProtein'];
    this['Fat'] = data['Fat'];
    this['CrudeFiber'] = data['CrudeFiber'];
    this['LysineTotal'] = data['LysineTotal'];
    this['MethionineTotal'] = data['MethionineTotal'];
    this['MetCysTotal'] = data['MetCysTotal'];
    this['ThreonineTotal'] = data['ThreonineTotal'];
    this['TryptophanTotal'] = data['TryptophanTotal'];
    this['Lactose'] = data['Lactose'];
    this['LYS_TH'] = data['LYS_TH'];
    this['MET_TH'] = data['MET_TH'];
    this['MC_TH'] = data['MC_TH'];
    this['THR_TH'] = data['THR_TH'];
    this['TRP_TH'] = data['TRP_TH'];
    this['Calcium'] = data['Calcium'];
    this['PhosphorusTotal'] = data['PhosphorusTotal'];
    this['PhosphorusAvail'] = data['PhosphorusAvail'];
    this['Sodium'] = data['Sodium'];
    this['Chloride'] = data['Chloride'];
    this['Salt'] = data['Salt'];
    this['LinoleicAcid'] = data['LinoleicAcid'];
  }
}
export enum EnumLoginDtoType {
  'app' = 'app',
  'web' = 'web'
}
export enum EnumRegisterDtoGender {
  'male' = 'male',
  'female' = 'female',
  'other' = 'other'
}
export type CombinedReferralParentTypes = UserEntity;
export enum EnumUserEntityGender {
  'male' = 'male',
  'female' = 'female',
  'other' = 'other'
}
export enum EnumUserEntityStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'banned' = 'banned',
  'deleted' = 'deleted'
}
export type CombinedProvinceTypes = ProvinceEntity;
export enum EnumRoleEntityType {
  'admin' = 'admin',
  'customer' = 'customer',
  'member' = 'member',
  'leader' = 'leader',
  'partner' = 'partner',
  'other' = 'other'
}
export enum EnumConfigEntityKey {
  'top-slide-banner' = 'top-slide-banner',
  'top-right-banner' = 'top-right-banner',
  'top-bottom-banner' = 'top-bottom-banner',
  'cost' = 'cost'
}
export type CombinedParentTypes = ProductCategoryEntity;
export type CombinedProductTypes = ProductEntity;
export enum EnumProductEntityStatus {
  'active' = 'active',
  'inactive' = 'inactive',
  'stopped' = 'stopped'
}
export type CombinedProductCategoryTypes = ProductCategoryEntity;
export type CombinedProductBrandTypes = ProductBrandEntity;
export type CombinedDistrictTypes = DistrictEntity;
export enum EnumOrderEntityStatus {
  'created' = 'created',
  'confirmed' = 'confirmed',
  'processing' = 'processing',
  'picking' = 'picking',
  'shipping' = 'shipping',
  'shipped' = 'shipped',
  'completed' = 'completed',
  'cancelled' = 'cancelled',
  'merchant_cancelled' = 'merchant_cancelled',
  'failed' = 'failed',
  'return' = 'return'
}
export type CombinedWardTypes = WardEntity;
export enum EnumOrderEntityPaymentType {
  'cod' = 'cod',
  'bacs' = 'bacs'
}
export enum EnumCalculateRequestDtoAnimalType {
  'cattle' = 'cattle',
  'poultry' = 'poultry',
  'aquaculture' = 'aquaculture'
}
export type CombinedDryMatterTypes = CalculateItem;
export type CombinedMETypes = CalculateItem;
export type CombinedCrudeProteinTypes = CalculateItem;
export type CombinedFatTypes = CalculateItem;
export type CombinedCrudeFiberTypes = CalculateItem;
export type CombinedLysineTotalTypes = CalculateItem;
export type CombinedMethionineTotalTypes = CalculateItem;
export type CombinedMetCysTotalTypes = CalculateItem;
export type CombinedThreonineTotalTypes = CalculateItem;
export type CombinedTryptophanTotalTypes = CalculateItem;
export type CombinedLactoseTypes = CalculateItem;
export type CombinedLYSTHTypes = CalculateItem;
export type CombinedMETTHTypes = CalculateItem;
export type CombinedMCTHTypes = CalculateItem;
export type CombinedTHRTHTypes = CalculateItem;
export type CombinedTRPTHTypes = CalculateItem;
export type CombinedCalciumTypes = CalculateItem;
export type CombinedPhosphorusTotalTypes = CalculateItem;
export type CombinedPhosphorusAvailTypes = CalculateItem;
export type CombinedSodiumTypes = CalculateItem;
export type CombinedChlorideTypes = CalculateItem;
export type CombinedSaltTypes = CalculateItem;
export type CombinedLinoleicAcidTypes = CalculateItem;
