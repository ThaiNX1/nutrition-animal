import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './account-info/account-info.component';
import { DonateComponent } from './donate/donate.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";



@NgModule({
  declarations: [
    AccountInfoComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule
  ]
})
export class AccountModule { }
