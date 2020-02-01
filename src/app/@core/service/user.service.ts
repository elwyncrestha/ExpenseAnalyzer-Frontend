import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppUtils} from '../utils/app.utils';
import {BaseService} from './base.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  static URL = 'v1/users';

  constructor(readonly http: HttpClient) {
    super(http);
  }

  public login(obj: any): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/login`);

    return this.http.post(req.url, obj, {headers: req.header});
  }

  protected getAPI(): string {
    return UserService.URL;
  }
}
