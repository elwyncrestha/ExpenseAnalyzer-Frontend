import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  DialogResponse,
  DialogResponseType
} from '../../../../../../@core/model/dialog-response-type.enum';
import {ObjectUtils} from '../../../../../../@core/utils/object.utils';
import {ExpenseService} from '../../../../../../@core/service/expense.service';
import {Expense} from '../../../../../../@core/model/expense';
import {Category} from '../../../../../../@core/model/category';
import {CategoryService} from '../../../../../../@core/service/category.service';
import {PaymentMethod} from '../../../../../../@core/model/payment-method';
import {PaymentMethodService} from '../../../../../../@core/service/payment-method.service';
import {ExpenseStatusService} from '../../../../../../@core/service/expense-status.service';
import {ExpenseStatus} from '../../../../../../@core/model/expense-status';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  form: FormGroup;
  categories: Array<Category> = new Array<Category>();
  paymentMethods: Array<PaymentMethod> = new Array<PaymentMethod>();
  expenseStatuses: Array<ExpenseStatus> = new Array<ExpenseStatus>();

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<TransactionFormComponent, DialogResponse>,
    private service: ExpenseService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Expense,
    private categoryService: CategoryService,
    private paymentMethodService: PaymentMethodService,
    private expenseStatusService: ExpenseStatusService
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((response: any) => {
      this.categories = response.detail;
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load categories');
    });
    this.paymentMethodService.getAll().subscribe((response: any) => {
      this.paymentMethods = response.detail;
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load payment methods');
    });
    this.expenseStatusService.getAll().subscribe((response: any) => {
      this.expenseStatuses = response.detail;
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load expense statuses');
    });
    this.buildForm(ObjectUtils.isEmpty(this.data) ? new Expense() : this.data);
  }

  buildForm(model: Expense): void {
    this.form = this.formBuilder.group({
      _id: [
        ObjectUtils.setUndefinedIfNull(model._id)
      ],
      date: [
        ObjectUtils.setUndefinedIfNull(model.date),
        [Validators.required]
      ],
      time: [
        ObjectUtils.setUndefinedIfNull(model.time),
        [Validators.required]
      ],
      amount: [
        ObjectUtils.setUndefinedIfNull(model.amount),
        [Validators.required]
      ],
      payeeOrPayer: [
        ObjectUtils.setUndefinedIfNull(model.payeeOrPayer),
        [Validators.required]
      ],
      category: [
        ObjectUtils.setUndefinedOrElseId(model.category),
        [Validators.required]
      ],
      paymentMethod: [
        ObjectUtils.setUndefinedOrElseId(model.paymentMethod),
        [Validators.required]
      ],
      status: [
        ObjectUtils.setUndefinedOrElseId(model.status),
        [Validators.required]
      ],
      description: [
        ObjectUtils.setUndefinedIfNull(model.description)
      ],
    });
  }

  submit(): void {
    const expense = this.form.value as Expense;
    if (ObjectUtils.isEmpty(this.data)) {
      this.service.save(expense).subscribe(() => {
        this.snackBarService.open('Successfully saved transaction');
        this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully saved transaction'));
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to save transaction');
        this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Failed to save transaction'));
      });
    } else {
      this.service.update(expense).subscribe(() => {
        this.snackBarService.open('Successfully updated transaction');
        this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully updated transaction'));
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to update transaction');
        this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Failed to update transaction'));
      });
    }
  }

}
