import {Component, OnInit} from '@angular/core';
import {UserEntity, UsersService} from "../../../services";
import {CookieService} from "ngx-cookie-service";
import {GlobalVariable} from "../../../common/global-variable";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  user?: UserEntity
  isChangePassword = false
  changePasswordForm!: FormGroup

  constructor(
    private cookie: CookieService,
    private globalVariable: GlobalVariable,
  ) {
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl(),
      newPassword: new FormControl(),
    })
    const userCookie = this.cookie.get('tomeo_user');
    const user = userCookie ? JSON.parse(userCookie) : {};
    this.globalVariable.setIsLoading(true)
    UsersService.getOneBase({
      id: user.sub,
      join: ['role', 'wallet'],
    }).then((res) => {
      this.globalVariable.setIsLoading(false)
      this.user = res
    }).catch((err) => {
      this.globalVariable.setIsLoading(false)
    })
  }

  submitForm(): void {

  }
}
