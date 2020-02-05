import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpenseStatusComponent} from './component/expense-status/expense-status.component';


const routes: Routes = [
  {path: '', component: ExpenseStatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseStatusRoutingModule {
}
