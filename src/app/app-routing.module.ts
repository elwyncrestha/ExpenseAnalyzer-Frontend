import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthBaseComponent} from './component/auth-base/auth-base.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: AuthBaseComponent,
    // TODO Add `LoginGuard`
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
