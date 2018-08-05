import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AlertsService} from 'angular-alert-module';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private router: Router, private alerts: AlertsService, public dialog: MatDialog ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    this.dialog.open(LoginComponent, {width: '500px', height: '350px'});
    return false;
  }
}
