import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {
  static URL = 'v1/category';

  constructor(readonly http: HttpClient) {
    super(http);
  }

  protected getAPI(): string {
    return CategoryService.URL;
  }
}
