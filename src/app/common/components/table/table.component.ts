import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariable } from '../../global-variable';
import { CommonService } from '../../common.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import * as _ from 'lodash';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataServiceParam: any;

  @Input() set dataSet(val: any) {
    if (val) {
      this.dataServiceParam = val;
      this.getData({ pageSize: 10, current: 1, disabled: false });
    }
  }

  data: any;
  pagination = {
    current: 1,
    pageSize: 10,
    total: 0,
    disabled: false,
  };

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router,
    private cookie: CookieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  getData(pagination?: PaginationProps): void {
    const dataInput = this.dataServiceParam as TableProps;
    this.globalVariant.setIsLoading(true);
    if (dataInput.service) {
      dataInput
        .service({
          ...dataInput.serviceParams,
          page: pagination?.current || 1,
          limit: pagination?.pageSize || 10,
        })
        .then((response: any) => {
          this.globalVariant.setIsLoading(false);
          this.data = response.data;
          // const hasTemplateHTMLs = dataInput.columns?.filter(
          //   (col) => col?.html?.length > 0
          // );
          // if (hasTemplateHTMLs?.length > 0) {
          //   hasTemplateHTMLs.map((temp) => {
          //     const index = dataInput.columns?.indexOf(temp);
          //     this.data = this.data?.map((_data: any) => {
          //       return {
          //         ..._data,
          //         [`html-${index}`]: this.getElementHTML(
          //           temp,
          //           this.getValueObj(_data, temp?.fields || [], 0)
          //         ),
          //       };
          //     });
          //     console.log('this.data', this.data);
          //   });
          // }
          this.pagination = {
            ...this.pagination,
            current: response.page,
            pageSize: pagination?.pageSize || 10,
            total: response.total,
            disabled: response.pageCount === 1,
          };
        })
        .catch((error) => {
          this.globalVariant.setIsLoading(false);
          this.common.alertError(error.message);
        });
    }
  }

  getValueObj(obj: any, fields: string[], index: number): any {
    if (index !== fields.length - 1) {
      const subObj = obj[fields[index]];
      return this.getValueObj(subObj, fields, index + 1);
    } else {
      return obj ? obj[fields[fields.length - 1]] : null;
    }
  }

  onChangePageIndex(page: number) {
    this.getData({ current: page, pageSize: 10 });
  }

  onEdit(button: ButtonProps, item: any): void {
    this.router.navigate([`${button.url}/${item.id}`]);
  }

  onView(button: ButtonProps, item: any): void {
    this.router.navigate([`${button.url}/view-${item.id}`]);
  }

  redirectLink(column: ColumnsType, item: any): void {
    this.router.navigate([`${column.url}/${item.id}`]);
  }

  confirmDelete(button: ButtonProps, item: any): void {
    this.globalVariant.setIsLoading(true);
    const dataInput = this.dataSet as TableProps;
    dataInput
      .deleteService({ id: item.id })
      .then(() => {
        this.globalVariant.setIsLoading(false);
        this.common.alertSuccess('Đã xóa thành công');
        this.getData({
          current: this.pagination.current,
          pageSize: this.pagination.pageSize,
        });
      })
      .catch((error: any) => {
        this.common.alertError(error.message);
        return;
      });
  }

  getElementHTML(column: ColumnsType, value?: any): any {
    const compiled = _.template(column.html);
    return this.sanitizer.bypassSecurityTrustHtml(compiled({ value: value }));
  }
}

export interface TableProps {
  service?: (params?: Record<string, unknown>) => Promise<any>;
  serviceParams?: {
    filter?: string[] | Record<string, unknown>;
    sort?: string[];
    join?: string[];
  };
  deleteService?: any;
  pagination?: PaginationProps;
  actions: ButtonProps[];
  columns: ColumnsType[];
}

export interface PaginationProps {
  current: number;
  pageSize: number;
  total?: number;
  disabled?: boolean;
}

export interface ColumnsType {
  type: ColumnValueType;
  fields?: string[];
  url?: string;
  title: string;
  width?: number;
  html?: any;
}

export interface ButtonProps {
  type: ButtonType;
  title?: string;
  icon?: string;
  url?: string;
  onClick?: () => void;
}

export enum ColumnValueType {
  text = 'text',
  link = 'link',
  button = 'button',
  html = 'html',
}

export enum ButtonType {
  edit = 'edit',
  view = 'view',
  delete = 'delete',
}
