import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {ExpenseStatus} from '../model/expense-status';

@Injectable({
  providedIn: 'root'
})
export class ExpenseStatusService extends BaseService<ExpenseStatus> {
  static URL = 'v1/expense-status';

  constructor(readonly http: HttpClient) {
    super(http);
  }

  protected getAPI(): string {
    return ExpenseStatusService.URL;
  }
}
