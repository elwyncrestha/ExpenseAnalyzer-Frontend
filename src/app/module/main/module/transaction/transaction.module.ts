import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TransactionRoutingModule} from './transaction-routing.module';
import {TransactionComponent} from './component/transaction/transaction.component';
import {TransactionFormComponent} from './component/transaction-form/transaction-form.component';
import {AngularMaterialModule} from '../../../../@theme/angular-material/angular-material.module';
import {CoreModule} from '../../../../@core/core.module';
import {TransactionByDurationComponent} from './component/transaction-by-duration/transaction-by-duration.component';


@NgModule({
  declarations: [TransactionComponent, TransactionFormComponent, TransactionByDurationComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    AngularMaterialModule,
    CoreModule
  ],
  entryComponents: [TransactionFormComponent]
})
export class TransactionModule {
}
