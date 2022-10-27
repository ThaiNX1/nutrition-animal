import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  EnumRoleEntityType,
  RoleEntity,
  RolesService,
  UserEntity,
} from '../../../services';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getRoleTypeName } from '../../../utils/util';
import { get } from 'lodash';
import { RoleDto } from '../dto/role.dto';

@Component({
  selector: 'app-id-role',
  templateUrl: './id-role.component.html',
  styleUrls: ['./id-role.component.scss'],
})
export class IdRoleComponent implements OnInit, AfterViewInit {
  isView: boolean = false;
  query: any;
  role: RoleDto = new RoleDto();
  roleTypes: any;
  @ViewChild('btnSave') btnSave?: TemplateRef<any>;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.getRoleTypes();
    this.query = this.activeRouter.snapshot.paramMap.get('id');
    if (this.query === 'create') {
      this.isView = false;
    } else {
      if (!isNaN(Number(this.query))) {
        this.isView = false;
        await this.getRole(Number(this.query));
      }
      if (isNaN(Number(this.query))) {
        this.isView = true;
        await this.getRole(Number(this.query.split('-')?.[1]));
      }
    }
  }

  ngAfterViewInit(): void {
    this.globalVariant.setHeader({
      backIcon: true,
      title:
        this.query === 'create'
          ? 'Thêm mới nhóm quyền'
          : !isNaN(this.query)
          ? 'Chỉnh sửa thông tin nhóm quyền'
          : 'Thông tin nhóm quyền',
      template: this.btnSave,
    });
  }

  getRoleTypes(): void {
    this.roleTypes = [];
    (
      Object.keys(EnumRoleEntityType) as Array<keyof typeof EnumRoleEntityType>
    ).map((roleType) => {
      this.roleTypes.push({
        key: getRoleTypeName(EnumRoleEntityType[roleType]),
        value: EnumRoleEntityType[roleType],
      });
    });
  }

  async getRole(id: number) {
    this.globalVariant.setIsLoading(true);
    RolesService.getOneBase({ id: id })
      .then((response) => {
        this.globalVariant.setIsLoading(false);
        this.role = response as RoleDto;
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(err?.message);
        this.role = new RoleDto();
      });
  }

  onSave(): void {
    this.globalVariant.setIsLoading(true);
    if (!this.role?.id) {
      RolesService.createOneBase({ body: this.role })
        .then(() => {
          this.globalVariant.setIsLoading(false);
          this.common.alertSuccess('Thêm mới nhóm quyền thành công');
          this.router.navigate(['setting/role']);
        })
        .catch((err) => {
          this.globalVariant.setIsLoading(false);
          this.common.alertError('Thêm mới nhóm quyền thất bại');
        });
    } else {
      RolesService.updateOneBase({ id: this.role?.id, body: this.role })
        .then(() => {
          this.globalVariant.setIsLoading(false);
          this.common.alertSuccess('Cập nhật nhóm quyền thành công');
          this.router.navigate(['setting/role']);
        })
        .catch((err) => {
          this.globalVariant.setIsLoading(false);
          this.common.alertError('Cập nhật nhóm quyền thất bại');
        });
    }
  }
}
