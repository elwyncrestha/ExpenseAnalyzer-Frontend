import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  DialogResponse,
  DialogResponseType
} from '../../../../../../@core/model/dialog-response-type.enum';
import {ObjectUtils} from '../../../../../../@core/utils/object.utils';
import {ExpenseStatusService} from '../../../../../../@core/service/expense-status.service';
import {ExpenseStatus} from '../../../../../../@core/model/expense-status';

@Component({
  selector: 'app-expense-status-form',
  templateUrl: './expense-status-form.component.html',
  styleUrls: ['./expense-status-form.component.scss']
})
export class ExpenseStatusFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<ExpenseStatusFormComponent, DialogResponse>,
    private service: ExpenseStatusService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ExpenseStatus
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.buildForm(ObjectUtils.isEmpty(this.data) ? new ExpenseStatus() : this.data);
  }

  buildForm(model: ExpenseStatus): void {
    this.form = this.formBuilder.group({
      _id: [
        ObjectUtils.setUndefinedIfNull(model._id)
      ],
      name: [
        ObjectUtils.setUndefinedIfNull(model.name),
        [Validators.required]
      ]
    });
  }

  submit(): void {
    const expenseStatus = this.form.value as ExpenseStatus;
    if (ObjectUtils.isEmpty(this.data)) {
      this.service.save(expenseStatus).subscribe(() => {
        this.snackBarService.open('Successfully saved status');
        this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully saved status'));
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to save status');
        this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Failed to save status'));
      });
    } else {
      this.service.update(expenseStatus).subscribe(() => {
        this.snackBarService.open('Successfully updated status');
        this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully updated status'));
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to update status');
        this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Failed to update status'));
      });
    }
  }
}
