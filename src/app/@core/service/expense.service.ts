import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {Expense} from '../model/expense';
import {Observable} from 'rxjs';
import {AppUtils} from '../utils/app.utils';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService extends BaseService<Expense> {
  static URL = 'v1/expense';

  constructor(readonly http: HttpClient) {
    super(http);
  }

  public getTransactionsDataByDuration(): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/chart/transaction-duration`);

    return this.http.get(req.url, {headers: req.header});
  }

  protected getAPI(): string {
    return ExpenseService.URL;
  }
}
