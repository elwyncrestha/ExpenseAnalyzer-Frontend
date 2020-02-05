import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentMethodComponent} from './component/payment-method/payment-method.component';


const routes: Routes = [
  {path: '', component: PaymentMethodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodRoutingModule {
}
