import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {Expense} from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends BaseService<Expense> {
  static URL = 'v1/expense';

  constructor(readonly http: HttpClient) {
    super(http);
  }

  protected getAPI(): string {
    return ExpenseService.URL;
  }
}
