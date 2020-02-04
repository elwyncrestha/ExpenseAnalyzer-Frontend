import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppUtils} from '../utils/app.utils';
import {BaseModel} from '../model/base-model';

export abstract class BaseService<T> {

  protected constructor(protected http: HttpClient) {
  }

  protected abstract getAPI(): string;

  public save(obj: T): Observable<any> {
    const req = AppUtils.getRequest(this.getAPI());

    return this.http.post(req.url, obj, {headers: req.header});
  }

  public update(obj: T): Observable<any> {
    (obj as unknown as BaseModel).id = (obj as unknown as BaseModel)._id;
    (obj as unknown as BaseModel)._id = undefined;
    const req = AppUtils.getRequest(this.getAPI());

    return this.http.patch(req.url, obj, {headers: req.header});
  }

  public getAll(): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/all`);

    return this.http.get(req.url, {headers: req.header});
  }

  public getPageable(page: number = 1, size: number = 10): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/list?page=${page}&size=${size}`);

    return this.http.get(req.url, {headers: req.header});
  }

  public delete(id: string): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/${id}`);

    return this.http.delete(req.url, {headers: req.header});
  }

  public statusCount(): Observable<any> {
    const req = AppUtils.getRequest(`${this.getAPI()}/status-count`);

    return this.http.get(req.url, {headers: req.header});
  }
}
