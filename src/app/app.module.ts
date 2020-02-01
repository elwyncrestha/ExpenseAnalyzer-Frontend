import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthBaseComponent} from './component/auth-base/auth-base.component';
import {LoginComponent} from './component/login/login.component';
import {ForgotPasswordComponent} from './component/forgot-password/forgot-password.component';
import {AngularMaterialModule} from './@theme/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthBaseComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
