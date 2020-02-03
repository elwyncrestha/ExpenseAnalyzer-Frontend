import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {AuthBaseComponent} from './component/auth-base/auth-base.component';
import {MainModuleGuard} from './@core/guards/main-module.guard';
import {LoginGuard} from './@core/guards/login.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: AuthBaseComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./module/main/main.module')
    .then(m => m.MainModule),
    canActivate: [MainModuleGuard]
  },
  {path: '**', redirectTo: 'login'},
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
