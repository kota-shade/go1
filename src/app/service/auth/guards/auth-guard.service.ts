import { Injectable } from '@angular/core';

import { CanActivate, CanActivateChild, CanLoad,  ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {AuthService} from '@app/service/auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private auth: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
