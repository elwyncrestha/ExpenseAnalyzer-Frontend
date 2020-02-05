import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentMethodRoutingModule} from './payment-method-routing.module';
import {PaymentMethodComponent} from './component/payment-method/payment-method.component';
import {PaymentMethodFormComponent} from './component/payment-method-form/payment-method-form.component';
import {AngularMaterialModule} from '../../../../@theme/angular-material/angular-material.module';
import {CoreModule} from '../../../../@core/core.module';


@NgModule({
  declarations: [PaymentMethodComponent, PaymentMethodFormComponent],
  imports: [
    CommonModule,
    PaymentMethodRoutingModule,
    AngularMaterialModule,
    CoreModule
  ],
  entryComponents: [PaymentMethodFormComponent]
})
export class PaymentMethodModule {
}
