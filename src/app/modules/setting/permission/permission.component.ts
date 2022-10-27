import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { Router } from '@angular/router';
import {
  EnumRoleEntityType,
  RoleEntity,
  RolesService,
} from '../../../services';
import { getRouteName } from '../../../utils/util';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
})
export class PermissionComponent implements OnInit, AfterViewInit {
  data: any;
  roles: { id?: number; name: string; permissions?: string[] }[] = [];
  @ViewChild('btnSave') btnSave?: TemplateRef<any>;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.globalVariant.setHeader({
      backIcon: false,
      title: 'Phân quyền',
      template: this.btnSave,
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.roles = [];
    this.globalVariant.setIsLoading(true);
    Promise.all([
      RolesService.getManyBase({
        filter: [`type||ne||${EnumRoleEntityType.admin}`],
        join: [],
        page: 1,
        limit: 1000,
      }),
      RolesService.roleControllerRoutes(),
    ])
      .then(([roleResponse, routeResponse]) => {
        this.globalVariant.setIsLoading(false);
        const data = Object.keys(routeResponse).map((route, index) => {
          const row = {
            title: getRouteName(route),
            key: route,
          };
          const rowChildes = Object.keys(routeResponse[route]).map(
            (routeKey, index) => {
              const rowChild = {
                title: routeResponse[route][routeKey],
                key: routeKey,
              };
              let dictionaryData: { [key: number]: object } = {};
              roleResponse.data?.map((role, index) => {
                if (!this.roles?.find((r: any) => r.id === role.id)) {
                  this.roles.push({
                    id: role.id,
                    name: role.name,
                    permissions: role.permissions || [],
                  });
                }
                dictionaryData[role.id || 0] = {
                  id: role.id,
                  key: index,
                  isChecked: role.permissions?.includes(route + '_' + routeKey),
                };
              });
              return { ...rowChild, data: dictionaryData };
            }
          );
          return { ...row, rowChildes: rowChildes };
        });
        this.data = data;
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(err?.message);
      });
  }

  onSave(): void {
    this.globalVariant.setIsLoading(true);
    this.roles.map((role) => {
      this.data?.map((dt: any) => {
        dt?.rowChildes?.map((rowChild: any) => {
          if (role.id) {
            const indexPermission = role?.permissions?.indexOf(
              dt.key + '_' + rowChild.key
            );
            if (rowChild.data[role.id]?.isChecked && indexPermission === -1) {
              role.permissions?.push(dt.key + '_' + rowChild.key);
            }
            if (
              !rowChild.data[role.id]?.isChecked &&
              indexPermission !== -1 &&
              indexPermission !== undefined
            ) {
              role.permissions?.splice(indexPermission, 1);
            }
          }
        });
      });
    });
    RolesService.roleControllerUpdateMany({ body: this.roles as RoleEntity[] })
      .then(() => {
        this.globalVariant.setIsLoading(false);
        this.common.alertSuccess('Cập nhật quyền thành công');
        window.location.reload();
      })
      .catch((err) => {
        this.globalVariant.setIsLoading(false);
        this.common.alertError(err?.message);
      });
  }
}
