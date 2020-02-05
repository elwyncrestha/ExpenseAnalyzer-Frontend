import {Component, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner/typings/progress-spinner';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {DialogUtils} from '../../../../../../@core/utils/dialog-utils';
import {PaymentMethod} from '../../../../../../@core/model/payment-method';
import {PaymentMethodService} from '../../../../../../@core/service/payment-method.service';
import {PaymentMethodFormComponent} from '../payment-method-form/payment-method-form.component';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  cardValues = {
    total: 0
  };
  dataSource: Array<PaymentMethod>;
  progressSpinnerMode: ProgressSpinnerMode = 'indeterminate';
  spinner = false;
  paginator = {
    options: [5, 10, 15, 20],
    size: 10,
    length: 1,
    page: 1
  };

  constructor(
    private service: PaymentMethodService,
    private snackBarService: SnackBarService,
    private matDialog: MatDialog
  ) {
  }

  static load(component: PaymentMethodComponent) {
    component.spinner = true;
    component.service.statusCount().subscribe((response: any) => {
      component.cardValues.total = response.detail.totalCount;
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
      component.snackBarService.open('Failed to load payment methods');
      component.spinner = false;
    });
  }

  ngOnInit() {
    PaymentMethodComponent.load(this);
  }

  changePage($event: PageEvent) {
    this.paginator.page = $event.pageIndex + 1;
    this.paginator.size = $event.pageSize;
    PaymentMethodComponent.load(this);
  }

  add() {
    const dialogRef = this.matDialog.open(PaymentMethodFormComponent);
    DialogUtils.resolve(dialogRef, PaymentMethodComponent.load, this);
  }

  edit(model: PaymentMethod) {
    const dialogRef = this.matDialog.open(PaymentMethodFormComponent, {
      data: model
    });
    DialogUtils.resolve(dialogRef, PaymentMethodComponent.load, this);
  }

  delete(model: PaymentMethod) {
    this.service.delete(model._id).subscribe(() => {
      this.snackBarService.open('Successfully deleted payment method');
      PaymentMethodComponent.load(this);
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to delete payment method');
    });
  }
}
