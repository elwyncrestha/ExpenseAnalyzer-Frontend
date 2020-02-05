import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransactionRoutingModule} from './transaction-routing.module';
import {TransactionComponent} from './component/transaction/transaction.component';
import {TransactionFormComponent} from './component/transaction-form/transaction-form.component';


@NgModule({
  declarations: [TransactionComponent, TransactionFormComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  entryComponents: [TransactionFormComponent]
})
export class TransactionModule {
}
