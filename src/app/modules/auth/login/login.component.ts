import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import axios, { AxiosRequestConfig } from 'axios';
import { serviceOptions } from '../../../services/serviceOptions';
import { AuthService } from '../../../services';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import { CookieService } from 'ngx-cookie-service';
import * as yup from 'yup';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dto: LoginDto = new LoginDto();
  userForm: any;

  constructor(
    private globalVariable: GlobalVariable,
    private common: CommonService,
    private cookie: CookieService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      tel: ['', Validators.required],
      password: ['', Validators.required],
    });
    const axiosConfig: AxiosRequestConfig = {
      baseURL: environment.serverApi,
      timeout: 60000, // 1 phút
    };
    serviceOptions.axios = axios.create(axiosConfig);
  }

  submitForm(): void {
    if (!this.common.validateForm(this.userForm)) return;
    this.globalVariable.setIsLoading(true);
    AuthService.authControllerLogin({
      body: this.dto,
    })
      .then((response) => {
        this.globalVariable.setIsLoading(false);
        this.cookie.set('token', String(response.token), { path: '/' });
        window.location.href = '/dashboard';
      })
      .catch((err) => {
        this.globalVariable.setIsLoading(false);
        this.common.alertError('', err);
      });
  }
}
