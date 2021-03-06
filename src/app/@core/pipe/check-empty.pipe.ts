import {Pipe, PipeTransform} from '@angular/core';
import {ObjectUtils} from '../utils/object.utils';

@Pipe({name: 'checkEmpty'})
export class CheckEmptyPipe implements PipeTransform {

  transform(input: any): any {
    return ObjectUtils.isEmpty(input) ? 'N/A' : input;
  }
}
