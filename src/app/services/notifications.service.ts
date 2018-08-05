import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Politic, PoliticNotification} from '../shared/politic';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Notification} from '../shared/notification';

@Injectable()
export class NotificationsService {

  public loadNotifications = new BehaviorSubject<boolean>(false);
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getNotifications(employeeKey): Observable<any> {
    return this.http.get(baseURL + 'notifications/visible/' + employeeKey);
  }

  updateNotification(notification: Notification): Observable<Notification> {
    return this.http.put<Notification>(baseURL + 'notifications', notification, {headers: this.httpHeaders});
  }
}
