import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../@core/model/user';
import {UserService} from '../../../../@core/service/user.service';
import {SnackBarService} from '../../../../@theme/angular-material/service/snack-bar.service';
import {ObjectUtils} from '../../../../@core/utils/object.utils';
import {Pattern} from '../../../../@core/pattern';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  user: User;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackBarService,
    public dialogRef: MatDialogRef<ProfileComponent>,
  ) {
  }

  get controls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.buildForm(new User());
    this.userService.authenticated().subscribe((response: any) => {
      this.user = response.detail;
      this.form.patchValue(JSON.parse(JSON.stringify(this.user)));
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to load user profile');
    });
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
    this.user = this.form.value as User;
    this.userService.update(this.user).subscribe(() => {
      this.dialogRef.close();
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to update profile');
    });
  }
}
