import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './index/user.component';
import { IdUserComponent } from './id-user/id-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: ':id',
    component: IdUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
