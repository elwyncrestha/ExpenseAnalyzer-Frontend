import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../@core/model/user';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.scss']
})
export class AuthBaseComponent implements OnInit {
  newUser: User;
  matSelectedTab = 0;
  @ViewChild('matTabGroup', {static: true}) matTabGroup: MatTabGroup;

  constructor() { }

  ngOnInit() {
    this.newUser = new User();
  }

  change() {
    this.matSelectedTab = 0;
  }
}
