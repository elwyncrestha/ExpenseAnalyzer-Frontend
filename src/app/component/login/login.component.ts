import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../@core/service/user.service';

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
    private userService: UserService
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
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
      alert('logged in');
    }, error => {
      console.error(error);
      alert('login failed');
    });
  }
}
