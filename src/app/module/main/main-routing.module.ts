import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './component/main-layout/main-layout.component';


const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./module/dashboard/dashboard.module')
      .then(m => m.DashboardModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}