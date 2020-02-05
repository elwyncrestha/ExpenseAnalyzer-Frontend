import {BaseModel} from './base-model';
import {CategoryType} from './category-type.enum';

export class Expense extends BaseModel {
  date: Date;
  time: string;
  amount: number;
  payeeOrPayer: string;
  category: any;
  paymentMethod: any;
  status: any;
  description: string;
  type: CategoryType;
}
