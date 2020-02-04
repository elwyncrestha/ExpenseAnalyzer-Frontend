import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthBaseComponent} from './component/auth-base/auth-base.component';
import {LoginComponent} from './component/login/login.component';
import {ForgotPasswordComponent} from './component/forgot-password/forgot-password.component';
import {AngularMaterialModule} from './@theme/angular-material/angular-material.module';
import {RegisterComponent} from './component/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthBaseComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
