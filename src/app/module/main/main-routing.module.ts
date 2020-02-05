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
    },
    {
      path: 'category',
      loadChildren: () => import('./module/category/category.module')
      .then(m => m.CategoryModule)
    },
    {
      path: 'expense-status',
      loadChildren: () => import('./module/expense-status/expense-status.module')
      .then(m => m.ExpenseStatusModule)
    },
    {
      path: 'payment-method',
      loadChildren: () => import('./module/payment-method/payment-method.module')
      .then(m => m.PaymentMethodModule)
    },
    {
      path: 'transaction',
      loadChildren: () => import('./module/transaction/transaction.module')
      .then(m => m.TransactionModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
