import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutAdminModule } from './layouts/admin/layout-admin.module';
import { CommonService } from './common/common.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './guard/logged-in-guard.service';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    LayoutAdminModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    CommonService,
    NzNotificationService,
    CookieService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
// @ts-ignore
export class AppModule {}

// @ts-ignore
