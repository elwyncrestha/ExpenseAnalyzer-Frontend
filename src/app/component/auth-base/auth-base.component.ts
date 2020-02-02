import { Component, OnInit } from '@angular/core';
import {User} from '../../@core/model/user';

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.scss']
})
export class AuthBaseComponent implements OnInit {
  newUser: User;

  constructor() { }

  ngOnInit() {
    this.newUser = new User();
  }

}
