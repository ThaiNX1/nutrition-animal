import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalVariable } from '../../../common/global-variable';
import { CommonService } from '../../../common/common.service';
import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '../../../../environments/environment';
import { serviceOptions } from '../../../services/serviceOptions';
import {
  AuthService,
  EnumRegisterDtoGender,
  RegisterDto,
} from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private globalVariable: GlobalVariable,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      fullName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
      validateEmail: new FormControl(''),
      validatePhone: new FormControl(''),
      validateFullName: new FormControl(''),
      validatePassword: new FormControl(''),
      validatePasswordConfirm: new FormControl(''),
      errorTplPasswordConfirm: new FormControl(
        'Mật khẩu xác nhận không được trống'
      ),
    });
    this.onValueChange();
    const axiosConfig: AxiosRequestConfig = {
      baseURL: environment.serverApi,
      timeout: 60000, // 1 phút
    };
    serviceOptions.axios = axios.create(axiosConfig);
  }

  submitForm(): void {
    if (this.registerForm.controls['email'].invalid)
      this.registerForm.controls['validateEmail'].setValue('error');
    if (this.registerForm.controls['phone'].invalid)
      this.registerForm.controls['validatePhone'].setValue('error');
    if (this.registerForm.controls['fullName'].invalid)
      this.registerForm.controls['validateFullName'].setValue('error');
    if (this.registerForm.controls['password'].invalid)
      this.registerForm.controls['validatePassword'].setValue('error');
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    )
      this.registerForm.patchValue({
        validatePasswordConfirm: 'error',
        errorTplPasswordConfirm: 'Mật khẩu xác nhận không trùng khớp',
      });
    else
      this.registerForm.patchValue({
        validatePasswordConfirm: 'success',
        errorTplPasswordConfirm: '',
      });
    if (this.registerForm.invalid) return;
    const request: RegisterDto = {
      fullName: this.registerForm.value.fullName,
      password: this.registerForm.value.password,
      tel: this.registerForm.value.phone,
      dob: new Date(),
      gender: EnumRegisterDtoGender.male,
      email: this.registerForm.value.email,
    };
    AuthService.authControllerRegister({ body: request })
      .then((res) => {
        this.common.alertSuccess('Đăng ký thành công');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.common.alertError('Đăng ký thất bại');
      });
  }

  onValueChange(): void {
    this.registerForm.controls['email'].valueChanges.subscribe((value) => {
      if (!value) this.registerForm.controls['validateEmail'].setValue('error');
      else this.registerForm.controls['validateEmail'].setValue('success');
    });
    this.registerForm.controls['phone'].valueChanges.subscribe((value) => {
      if (!value) this.registerForm.controls['validatePhone'].setValue('error');
      else this.registerForm.controls['validatePhone'].setValue('success');
    });
    this.registerForm.controls['fullName'].valueChanges.subscribe((value) => {
      if (!value)
        this.registerForm.controls['validateFullName'].setValue('error');
      else this.registerForm.controls['validateFullName'].setValue('success');
    });
    this.registerForm.controls['password'].valueChanges.subscribe((value) => {
      if (!value)
        this.registerForm.controls['validatePassword'].setValue('error');
      else this.registerForm.controls['validatePassword'].setValue('success');
    });
    this.registerForm.controls['confirmPassword'].valueChanges.subscribe(
      (value) => {
        if (!value)
          this.registerForm.patchValue({
            validatePasswordConfirm: 'error',
            errorTplPasswordConfirm: 'Mật khẩu xác nhận không được trống',
          });
        else
          this.registerForm.patchValue({
            validatePasswordConfirm: 'validating',
            errorTplPasswordConfirm: '',
          });
      }
    );
  }
}
