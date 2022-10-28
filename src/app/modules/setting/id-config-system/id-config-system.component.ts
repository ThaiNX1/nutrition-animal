import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  ConfigEntity,
  ConfigService,
  EnumConfigEntityKey,
} from '../../../services';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-id-config-system',
  templateUrl: './id-config-system.component.html',
  styleUrls: ['./id-config-system.component.scss'],
})
export class IdConfigSystemComponent implements OnInit {
  isView: boolean = false;
  query: any;
  config?: ConfigEntity;
  configForm!: FormGroup;
  @ViewChild('btnSave') btnSave?: TemplateRef<any>;
  configKeys = [
    {
      value: EnumConfigEntityKey.cost,
      label: 'Chi phí',
    },
  ];

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private activeRouter: ActivatedRoute,
    private route: Router
  ) {}

  ngAfterViewInit(): void {
    this.globalVariant.setHeader({
      backIcon: true,
      title:
        this.query === 'create'
          ? 'Thêm cấu hình mới'
          : !isNaN(this.query)
          ? 'Chỉnh sửa thông tin cấu hình'
          : 'Thông tin cấu hình',
      template: this.btnSave,
    });
  }

  async ngOnInit(): Promise<void> {
    this.query = this.activeRouter.snapshot.paramMap.get('id');
    if (this.query === 'create') {
      this.isView = false;
    } else {
      if (!isNaN(Number(this.query))) {
        this.isView = false;
        this.config = await this.getConfig(Number(this.query));
      }
      if (isNaN(Number(this.query))) {
        this.isView = true;
        this.config = await this.getConfig(Number(this.query.split('-')?.[1]));
      }
    }
    this.configForm = new FormGroup({
      key: new FormControl(),
      name: new FormControl(),
      value: new FormControl(),
    });
  }

  async getConfig(id: number): Promise<ConfigEntity | undefined> {
    this.globalVariant.setIsLoading(true);
    const result = await Promise.all([ConfigService.getOneBase({ id: id })])
      .then(([response]) => {
        this.globalVariant.setIsLoading(false);
        this.route.navigate(['/setting/config']);
        return response;
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(err.message);
        return undefined;
      });
    return result;
  }

  onSave(): void {
    this.config = {
      ...this.config,
      key: this.configForm.value.key,
      name: this.configForm.value.name,
      value: this.configForm.value.value,
      startDate: new Date(),
      endDate: new Date(),
      note: '',
    };
    this.globalVariant.setIsLoading(true);
    ConfigService.createOneBase({ body: this.config })
      .then((res) => {
        this.globalVariant.setIsLoading(false);
        return res;
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(err.message);
      });
    console.log('btnSave');
  }
}
