import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './account-info/account-info.component';
import { DonateComponent } from './donate/donate.component';



@NgModule({
  declarations: [
    AccountInfoComponent,
    DonateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
