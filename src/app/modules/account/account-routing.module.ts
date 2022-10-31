import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccountInfoComponent} from "./account-info/account-info.component";
import {DonateComponent} from "./donate/donate.component";

const routes: Routes = [
  {
    path: 'info',
    component: AccountInfoComponent,
  },
  {
    path: 'donate',
    component: DonateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {
}
