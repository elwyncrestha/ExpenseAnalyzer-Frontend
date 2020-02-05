import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {PaymentMethod} from '../model/payment-method';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService extends BaseService<PaymentMethod> {
  static URL = 'v1/payment-method';

  constructor(readonly http: HttpClient) {
    super(http);
  }

  protected getAPI(): string {
    return PaymentMethodService.URL;
  }
}
