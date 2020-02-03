import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {ObjectUtils} from '../utils/object.utils';
import {LocalStorageUtils} from '../utils/local-storage.utils';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!ObjectUtils.isEmpty(LocalStorageUtils.getStorage().at)) {
      this.router.navigate(['/main/dashboard']);
      return false;
    } else {
      return true;
    }
  }

}
