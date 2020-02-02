import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../@core/service/user.service';
import {SnackBarService} from '../../@theme/angular-material/service/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackBarService
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [
        undefined,
        [Validators.required, Validators.minLength(8)]
      ]
    });
  }

  submit() {
    this.userService.login(this.form.value).subscribe((response: any) => {
      this.snackBarService.open('Login succeeded!!!');
    }, error => {
      console.error(error);
      this.snackBarService.open('Login failed!!!');
    });
  }
}
