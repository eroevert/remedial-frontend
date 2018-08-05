import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {FormGroup} from '@angular/forms';
import {Organization} from '../shared/organization';
import {ReturnModel} from '../shared/returnModel';
import {AlertsService} from 'angular-alert-module';
import {User} from '../shared/user';
import {PoliticsService} from '../services/politics.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  @ViewChild('username') el: ElementRef;
  focusin: boolean;
  rForm: FormGroup;
  post: any;
  usernameAlert: string;
  passwordAlert: string;
  loginError: boolean;
  returnUrl: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private route: ActivatedRoute,
    private authenticationservice: LoginService,
    private politicsService: PoliticsService,
    public router: Router, private alerts: AlertsService) {
    this.focusin = true;
    this.usernameAlert = '';
    this.passwordAlert = 'Please fill password';
    this.loginError = false;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.usernameAlert = '';
    if ( !this.verifyLogin()) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }
  validateResult(result: ReturnModel<User>) {
    if (result['code'] === 1) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.politicsService.loadPolitics.next(true);
    } else {
      // this.alerts.setMessage(result['message'], 'error');
      this.usernameAlert = result['message'];
    }
  }
  addPost() {
    this.usernameAlert = '';
    this.authenticationservice.login(this.user).subscribe(
      res => {
        this.validateResult(res);
      },
      err => {
        return err;
      }
    );
  }

  logOut() {
    this.authenticationservice.logout();
    this.dialogRef.close();
    this.router.navigate(['home']);
    this.politicsService.loadPolitics.next(true);
  }
  verifyLogin() {
    if ( localStorage.getItem('currentUser') !== null ) {
      return false;
    } else {
      return true;
    }
  }
}
