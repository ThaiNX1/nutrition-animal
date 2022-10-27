import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserEntity, UsersService } from '../../../services';

@Component({
  selector: 'app-id-user',
  templateUrl: './id-user.component.html',
  styleUrls: ['./id-user.component.scss'],
})
export class IdUserComponent implements OnInit, AfterViewInit {
  isView: boolean = false;
  query: any;
  user?: UserEntity;
  @ViewChild('btnSave') btnSave?: TemplateRef<any>;

  constructor(
    private globalVariant: GlobalVariable,
    private common: CommonService,
    private activeRouter: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.globalVariant.setHeader({
      backIcon: true,
      title:
        this.query === 'create'
          ? 'Thêm thành viên mới'
          : !isNaN(this.query)
          ? 'Chỉnh sửa thông tin thành viên'
          : 'Thông tin thành viên',
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
        this.user = await this.getUser(Number(this.query));
      }
      if (isNaN(Number(this.query))) {
        this.isView = true;
        this.user = await this.getUser(Number(this.query.split('-')?.[1]));
      }
    }
  }

  async getUser(id: number): Promise<UserEntity | undefined> {
    this.globalVariant.setIsLoading(true);
    const result = await Promise.all([
      UsersService.getOneBase({ id: id, join: ['role'] }),
    ])
      .then(([response]) => {
        this.globalVariant.setIsLoading(false);
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
    console.log('btnSave');
  }
}
