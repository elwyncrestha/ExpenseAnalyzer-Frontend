import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpenseStatusRoutingModule} from './expense-status-routing.module';
import {ExpenseStatusComponent} from './component/expense-status/expense-status.component';


@NgModule({
  declarations: [ExpenseStatusComponent],
  imports: [
    CommonModule,
    ExpenseStatusRoutingModule
  ]
})
export class ExpenseStatusModule {
}
