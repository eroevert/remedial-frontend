import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AcademicLevel} from '../shared/academicLevel';

@Injectable()
export class AcademicLevelService {

  constructor(private http: HttpClient) {
  }

  getAcademicLevels(): Observable<any> {
    return this.http.get(baseURL + 'academicLevel')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  saveacademicLevel(academicLevel: AcademicLevel): Observable<any> {
    academicLevel.status = '1';
    return this.http.post(baseURL + 'academicLevel', academicLevel).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }
}
