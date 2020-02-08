import {Component, Input, OnInit} from '@angular/core';
import {Expense} from '../../../../../../@core/model/expense';
import {CategoryType} from '../../../../../../@core/model/category-type.enum';

@Component({
  selector: 'app-transaction-by-duration',
  templateUrl: './transaction-by-duration.component.html',
  styleUrls: ['./transaction-by-duration.component.scss']
})
export class TransactionByDurationComponent implements OnInit {
  @Input() dataSource: Array<Expense>;
  categoryTypeEnum = CategoryType;

  constructor() {
  }

  ngOnInit() {
  }

}
