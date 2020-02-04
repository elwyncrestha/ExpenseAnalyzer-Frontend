import {BaseModel} from './base-model';
import {CategoryType} from './category-type.enum';

export class Category extends BaseModel {
  name: string;
  type: CategoryType;
}
