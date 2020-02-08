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
  todayPanelOpenState = false;
  transactionByDurationData: {
    today: Array<Expense>,
    thisWeek: Array<Expense>,
    thisMonth: Array<Expense>,
    thisYear: Array<Expense>
  } = {
    today: undefined,
    thisWeek: undefined,
    thisMonth: undefined,
    thisYear: undefined
  };

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
    const dialogRef = this.matDialog.open(TransactionFormComponent, {
      maxHeight: '90vh'
    });
    DialogUtils.resolve(dialogRef, TransactionComponent.load, this);
  }

  edit(model: Expense) {
    const dialogRef = this.matDialog.open(TransactionFormComponent, {
      data: model,
      maxHeight: '90vh'
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

  loadTransactionByDuration() {
    if (this.todayPanelOpenState) {
      this.service.getTransactionsDataByDuration().subscribe((response: any) => {
        const data = response.detail;
        this.transactionByDurationData.today = new Array<Expense>();
        this.transactionByDurationData.today.push(...data.today.income, ...data.today.expense);
        this.transactionByDurationData.thisWeek = new Array<Expense>();
        this.transactionByDurationData.thisWeek.push(...data.thisWeek.income, ...data.thisWeek.expense);
        this.transactionByDurationData.thisMonth = new Array<Expense>();
        this.transactionByDurationData.thisMonth.push(...data.thisMonth.income, ...data.thisMonth.expense);
        this.transactionByDurationData.thisYear = new Array<Expense>();
        this.transactionByDurationData.thisYear.push(...data.thisYear.income, ...data.thisYear.expense);
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to load transactions by duration');
      });
    }
  }
}
