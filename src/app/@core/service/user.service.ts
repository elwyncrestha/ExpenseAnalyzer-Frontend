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

  public initiateReset(email: string): Observable<any> {
    const req = AppUtils.getRequestUnauthenticated(`${this.getAPI()}/reset-password/email/${email}`);

    return this.http.get(req.url, {headers: req.header});
  }

  public resetPassword(obj: { email: string, token: string, password: string }): Observable<any> {
    const req = AppUtils.getRequestUnauthenticated(`${this.getAPI()}/reset-password`);

    return this.http.post(req.url, obj, {headers: req.header});
  }

  public logout(): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/logout`);

    return this.http.get(req.url, {headers: req.header});
  }

  public logoutAll(): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/logout/all`);

    return this.http.get(req.url, {headers: req.header});
  }

  protected getAPI(): string {
    return UserService.URL;
  }
}
