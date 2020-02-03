import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Menu, MENU_ITEMS} from './sidenav-menu';
import {UserService} from "../../../../@core/service/user.service";
import {SnackBarService} from "../../../../@theme/angular-material/service/snack-bar.service";
import {LocalStorageUtils} from "../../../../@core/utils/local-storage.utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  menus: Array<Menu>;
  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userService: UserService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.menus = MENU_ITEMS;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.userService.logout().subscribe(() => {
      LocalStorageUtils.clearStorage();
      this.router.navigate(['/']);
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to logout!!!');
    });
  }

  logoutAll() {
    this.userService.logoutAll().subscribe(() => {
      LocalStorageUtils.clearStorage();
      this.router.navigate(['/']);
    }, error => {
      console.error(error);
      this.snackBarService.open('Failed to logout!!!');
    });
  }
}
