import {Component, OnInit} from '@angular/core';
import {ExpenseStatus} from '../../../../../../@core/model/expense-status';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner/typings/progress-spinner';
import {ExpenseStatusService} from '../../../../../../@core/service/expense-status.service';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {DialogUtils} from '../../../../../../@core/utils/dialog-utils';
import {ExpenseStatusFormComponent} from '../expense-status-form/expense-status-form.component';

@Component({
  selector: 'app-expense-status',
  templateUrl: './expense-status.component.html',
  styleUrls: ['./expense-status.component.scss']
})
export class ExpenseStatusComponent implements OnInit {
  cardValues = {
    total: 0
  };
  dataSource: Array<ExpenseStatus>;
  progressSpinnerMode: ProgressSpinnerMode = 'indeterminate';
  spinner = false;
  paginator = {
    options: [5, 10, 15, 20],
    size: 10,
    length: 1,
    page: 1
  };

  constructor(
    private expenseStatusService: ExpenseStatusService,
    private snackBarService: SnackBarService,
    private matDialog: MatDialog
  ) {
  }

  static load(component: ExpenseStatusComponent) {
    component.spinner = true;
    component.expenseStatusService.statusCount().subscribe((response: any) => {
      component.cardValues.total = response.detail.totalCount;
    }, error => {
      console.error(error);
      component.snackBarService.open('Failed to load status counts');
    });
    component.expenseStatusService.getPageable(component.paginator.page, component.paginator.size)
    .subscribe((response: any) => {
      component.dataSource = response.detail.content;
      component.paginator.length = response.detail.totalElements;
      component.spinner = false;
    }, error => {
      console.error(error);
      component.snackBarService.open('Failed to load status list');
      component.spinner = false;
    });
  }

  ngOnInit() {
    ExpenseStatusComponent.load(this);
  }

  changePage($event: PageEvent) {
    this.paginator.page = $event.pageIndex + 1;
    this.paginator.size = $event.pageSize;
    ExpenseStatusComponent.load(this);
  }

  add() {
    const dialogRef = this.matDialog.open(ExpenseStatusFormComponent);
    DialogUtils.resolve(dialogRef, ExpenseStatusComponent.load, this);
  }

  edit(model: ExpenseStatus) {
    const dialogRef = this.matDialog.open(ExpenseStatusFormComponent, {
      data: model
    });
    DialogUtils.resolve(dialogRef, ExpenseStatusComponent.load, this);
  }

  delete(model: ExpenseStatus) {
    this.expenseStatusService.delete(model._id).subscribe(() => {
      this.snackBarService.open('Successfully deleted status');
      ExpenseStatusComponent.load(this);
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to delete status');
    });
  }

}
