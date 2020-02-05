import {Component, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner/typings/progress-spinner';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {DialogUtils} from '../../../../../../@core/utils/dialog-utils';
import {Expense} from '../../../../../../@core/model/expense';
import {ExpenseService} from '../../../../../../@core/service/expense.service';
import {TransactionFormComponent} from '../transaction-form/transaction-form.component';
import {CategoryType} from '../../../../../../@core/model/category-type.enum';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  cardValues = {
    expenseCount: 0,
    incomeCount: 0
  };
  dataSource: Array<Expense>;
  progressSpinnerMode: ProgressSpinnerMode = 'indeterminate';
  spinner = false;
  paginator = {
    options: [5, 10, 15, 20],
    size: 10,
    length: 1,
    page: 1
  };
  categoryTypeEnum = CategoryType;

  constructor(
    private service: ExpenseService,
    private snackBarService: SnackBarService,
    private matDialog: MatDialog
  ) {
  }

  static load(component: TransactionComponent) {
    component.spinner = true;
    component.service.statusCount().subscribe((response: any) => {
      component.cardValues.expenseCount = response.detail.expenseCount;
      component.cardValues.incomeCount = response.detail.incomeCount;
    }, error => {
      console.error(error);
      component.snackBarService.open('Failed to load status counts');
    });
    component.service.getPageable(component.paginator.page, component.paginator.size)
    .subscribe((response: any) => {
      component.dataSource = response.detail.content;
      component.paginator.length = response.detail.totalElements;
      component.spinner = false;
    }, error => {
      console.error(error);
      component.snackBarService.open('Failed to load transactions');
      component.spinner = false;
    });
  }

  ngOnInit() {
    TransactionComponent.load(this);
  }

  changePage($event: PageEvent) {
    this.paginator.page = $event.pageIndex + 1;
    this.paginator.size = $event.pageSize;
    TransactionComponent.load(this);
  }

  add() {
    const dialogRef = this.matDialog.open(TransactionFormComponent);
    DialogUtils.resolve(dialogRef, TransactionComponent.load, this);
  }

  edit(model: Expense) {
    const dialogRef = this.matDialog.open(TransactionFormComponent, {
      data: model
    });
    DialogUtils.resolve(dialogRef, TransactionComponent.load, this);
  }

  delete(model: Expense) {
    this.service.delete(model._id).subscribe(() => {
      this.snackBarService.open('Successfully deleted transaction');
      TransactionComponent.load(this);
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to delete transaction');
    });
  }

}
