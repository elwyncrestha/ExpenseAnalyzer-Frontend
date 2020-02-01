import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder
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
    console.log(this.form.value);
  }
}
