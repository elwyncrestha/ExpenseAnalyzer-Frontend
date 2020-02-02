import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../@core/model/user';
import {ObjectUtils} from '../../@core/utils/object.utils';
import {Pattern} from '../../@core/pattern';
import {UserService} from '../../@core/service/user.service';
import {SnackBarService} from '../../@theme/angular-material/service/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  @Input() user: User;
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
    this.buildForm(this.user);
    this.user.firstName = 'Elvin';
    console.log(ObjectUtils.removePropIfEmpty(this.user));
  }

  buildForm(user: User): void {
    this.form = this.formBuilder.group({
      _id: [
        ObjectUtils.setUndefinedIfNull(user._id)
      ],
      firstName: [
        ObjectUtils.setUndefinedIfNull(user.firstName),
        Validators.required
      ],
      middleName: [
        ObjectUtils.setUndefinedIfNull(user.middleName)
      ],
      lastName: [
        ObjectUtils.setUndefinedIfNull(user.lastName),
        Validators.required
      ],
      email: [
        ObjectUtils.setUndefinedIfNull(user.email),
        [Validators.required, Validators.pattern(Pattern.EMAIL)]
      ],
      username: [
        ObjectUtils.setUndefinedIfNull(user.username),
        Validators.required
      ],
      password: [
        undefined,
        [Validators.required, Validators.minLength(8)]
      ],
      token: [
        ObjectUtils.setUndefinedIfNull(user.tokens)
      ]
    });
  }

  submit() {
    const user = ObjectUtils.removePropIfEmpty(this.form.value as User);
    this.userService.save(user).subscribe(() => {
      this.snackBarService.open('Successfully registered!!!');
    }, error => {
      console.error(error);
      this.snackBarService.open('Sorry. Failed to register!!!');
    });
  }
}
