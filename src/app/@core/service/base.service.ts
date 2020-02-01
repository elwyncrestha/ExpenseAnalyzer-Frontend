import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  protected constructor(protected http: HttpClient) {
  }

  protected abstract getAPI(): string;
}
