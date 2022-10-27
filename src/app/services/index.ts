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
export enum EnumConfigEntityKey {
  'top-slide-banner' = 'top-slide-banner',
  'top-right-banner' = 'top-right-banner',
  'top-bottom-banner' = 'top-bottom-banner'
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
export type CombinedParentTypes = ProductCategoryEntity;
