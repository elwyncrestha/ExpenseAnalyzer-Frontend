import {BaseModel} from './base-model';

export class User extends BaseModel {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  tokens: [];
}
