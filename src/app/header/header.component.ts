import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {Notification} from '../shared/notification';
import {NotificationsService} from '../services/notifications.service';
import {PoliticsService} from '../services/politics.service';
import {PoliticFormViewComponent} from '../politic-form/politic-form-view.component';
import {Politic} from '../shared/politic';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notifications: Notification[];

  constructor(public dialog: MatDialog,
              private politicService: PoliticsService,
              private notificationService: NotificationsService) {
    this.notifications = [];
  }

  ngOnInit() {
    this.politicService.loadPolitics.subscribe(
      value => {
        if (value) {
          this.loadNotifications();
        }
      }
    );
    this.loadNotifications();
  }
  openViewForm(notification: Notification): void {
    try {
      notification.visible = false;
      this.notificationService.updateNotification(notification).subscribe(response => {
        if (response['code'] === -1) {
        } else {
          this.loadNotifications();
        }
      });
    } catch (e) {
    }
    const dialogRef = this.dialog.open(PoliticFormViewComponent, {width: '500px', height: '450px'});
    const instance = dialogRef.componentInstance;
    instance.politic = notification.politics;
  }

  private loadNotifications() {
    let employeeKey = 0;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      employeeKey = user.employeeKey;
    }
    this.notificationService.getNotifications(employeeKey).subscribe(
      (result) => {
        if (result.object) {
          this.notifications = result.object;
        }
      }
    );
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '350px'});
  }
}
