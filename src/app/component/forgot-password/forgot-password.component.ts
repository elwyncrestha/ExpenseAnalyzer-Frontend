import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pattern} from '../../@core/pattern';
import {UserService} from '../../@core/service/user.service';
import {SnackBarService} from '../../@theme/angular-material/service/snack-bar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  verificationForm: FormGroup;
  resetForm: FormGroup;
  formVisibility = {
    verification: true,
    reset: false
  };
  verifiedEmail: string;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackBarService
  ) {
  }

  get verificationControls() {
    return this.verificationForm.controls;
  }

  get resetControls() {
    return this.resetForm.controls;
  }

  ngOnInit() {
    this.buildVerificationForm();
  }

  buildVerificationForm(): void {
    this.verificationForm = this.formBuilder.group({
      email: [
        undefined,
        [Validators.required, Validators.pattern(Pattern.EMAIL)]
      ]
    });
  }

  buildResetForm(): void {
    this.resetForm = this.formBuilder.group({
      email: [
        this.verifiedEmail,
        [Validators.required, Validators.pattern(Pattern.EMAIL)]
      ],
      token: [
        undefined,
        Validators.required
      ],
      password: [
        undefined,
        Validators.required
      ]
    });
  }

  verify() {
    this.userService.initiateReset(this.verificationForm.get('email').value)
    .subscribe(() => {
      this.verifiedEmail = this.verificationForm.get('email').value;
      this.buildResetForm();
      this.formVisibility = {
        verification: false,
        reset: true
      };
    }, error => {
      console.error(error);
      this.snackBarService.open('Verification failed!!!');
    });
  }

  submit() {
    const reset: { password: string, email: string, token: string } = this.resetForm.value;
    this.userService.resetPassword(reset).subscribe(() => {
      this.snackBarService.open('Successfully reset password!!!')
      .afterDismissed().subscribe(() => this.viewVerificationForm());
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to reset password!!!');
    });
  }

  viewVerificationForm(): void {
    this.formVisibility = {
      verification: true,
      reset: false
    };
    this.buildVerificationForm();
  }
}
