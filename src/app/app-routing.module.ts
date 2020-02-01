import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthBaseComponent} from './component/auth-base/auth-base.component';
import {LoginComponent} from './component/login/login.component';
import {ForgotPasswordComponent} from './component/forgot-password/forgot-password.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '', component: AuthBaseComponent, children: [
      {
        path: 'login',
        component: LoginComponent,
        // TODO Add `LoginGuard`
      },
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
        // TODO Add `LoginGuard`
      },
    ],
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
