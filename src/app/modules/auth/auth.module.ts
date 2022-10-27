import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component'
import { AuthRoutingModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { RegisterComponent } from './register/register.component'
import { NzSelectModule } from 'ng-zorro-antd/select'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule,
  ],
})
export class AuthModule {}
