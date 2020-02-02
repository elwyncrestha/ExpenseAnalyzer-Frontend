import {LocalStorageUtils} from './local-storage.utils';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export class AppUtils {
  public static URL = environment.SERVER_URL;

  public static getRequest(api: string) {
    const fullApi = `${this.URL}/${api}`;
    const at = LocalStorageUtils.getStorage().at;

    return {
      url: fullApi,
      header: new HttpHeaders({
        Authorization: 'Bearer ' + at,
        'Content-Type': 'application/json',
      }),
    };
  }

  public static getRequestUnauthenticated(api: string) {
    const fullApi = `${this.URL}/${api}`;

    return {
      url: fullApi,
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }
}
