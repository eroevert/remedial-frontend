import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class AuditoryService {

  public loadPolitics = new BehaviorSubject<boolean>(false);
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAuditories(): Observable<any> {
    return this.http.get(baseURL + 'auditories');
  }

}
