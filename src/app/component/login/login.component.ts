import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../@core/service/user.service';
import {SnackBarService} from '../../@theme/angular-material/service/snack-bar.service';
import {LocalStorage, LocalStorageUtils} from '../../@core/utils/local-storage.utils';
import {Router} from '@angular/router';

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
    private snackBarService: SnackBarService,
    private router: Router
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
      const localStorage: LocalStorage = LocalStorageUtils.getStorage();
      localStorage.at = response.detail;
      LocalStorageUtils.setStorage(localStorage);
      this.router.navigate(['/main/dashboard']);
    }, error => {
      console.error(error);
      this.snackBarService.open('Login failed!!!');
    });
  }
}
