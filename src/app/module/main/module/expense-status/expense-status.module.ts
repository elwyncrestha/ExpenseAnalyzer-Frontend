import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpenseStatusRoutingModule} from './expense-status-routing.module';
import {ExpenseStatusComponent} from './component/expense-status/expense-status.component';
import {AngularMaterialModule} from '../../../../@theme/angular-material/angular-material.module';
import {ExpenseStatusFormComponent} from './component/expense-status-form/expense-status-form.component';
import {CoreModule} from '../../../../@core/core.module';


@NgModule({
  declarations: [ExpenseStatusComponent, ExpenseStatusFormComponent],
  imports: [
    CommonModule,
    ExpenseStatusRoutingModule,
    AngularMaterialModule,
    CoreModule
  ],
  entryComponents: [ExpenseStatusFormComponent]
})
export class ExpenseStatusModule {
}
