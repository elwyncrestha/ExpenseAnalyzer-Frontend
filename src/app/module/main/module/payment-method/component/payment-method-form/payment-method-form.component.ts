import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../../../../../@theme/angular-material/service/snack-bar.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  DialogResponse,
  DialogResponseType
} from '../../../../../../@core/model/dialog-response-type.enum';
import {ObjectUtils} from '../../../../../../@core/utils/object.utils';
import {PaymentMethodService} from '../../../../../../@core/service/payment-method.service';
import {PaymentMethod} from '../../../../../../@core/model/payment-method';

@Component({
  selector: 'app-payment-method-form',
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss']
})
export class PaymentMethodFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    public dialogRef: MatDialogRef<PaymentMethodFormComponent, DialogResponse>,
    private service: PaymentMethodService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PaymentMethod
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.buildForm(ObjectUtils.isEmpty(this.data) ? new PaymentMethod() : this.data);
  }

  buildForm(model: PaymentMethod): void {
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
    const paymentMethod = this.form.value as PaymentMethod;
    if (ObjectUtils.isEmpty(this.data)) {
      this.service.save(paymentMethod).subscribe(() => {
        this.snackBarService.open('Successfully saved payment method');
        this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully saved payment method'));
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to save payment method');
        this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Failed to save payment method'));
      });
    } else {
      this.service.update(paymentMethod).subscribe(() => {
        this.snackBarService.open('Successfully updated payment method');
        this.dialogRef.close(new DialogResponse(DialogResponseType.SUCCESS, 'Successfully updated payment method'));
      }, error => {
        console.error(error);
        this.snackBarService.open('Failed to update payment method');
        this.dialogRef.close(new DialogResponse(DialogResponseType.ERROR, 'Failed to update payment method'));
      });
    }
  }

}
