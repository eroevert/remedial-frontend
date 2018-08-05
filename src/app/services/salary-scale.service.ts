import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {SalaryScale} from '../shared/salaryScale';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SalaryScaleService {

  constructor(private http: HttpClient) {
  }

  getSalaryScales(): Observable<any> {
    return this.http.get(baseURL + 'salaryscale')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getSalaryScalesFather(id: number): Observable<any> {
    return this.http.get(baseURL + 'salaryScale/padre/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  saveSalaryScale(salaryScale: SalaryScale): Observable<any> {
    salaryScale.status = '1';
    return this.http.post(baseURL + 'salaryScale', salaryScale).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }

  getSalaryScale(id: number): Observable<any> {
    return this.http.get(baseURL + 'salaryScale/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getFeaturedSalaryScale(): Observable<SalaryScale> {
    return this.http.get<SalaryScale>(baseURL + 'salaryScale?featured=true')
      .map(res => {
        return res[0];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getSalaryScaleIds(): Observable<number[]> {
    return this.getSalaryScales()
      .map(salaryScales => {
        return salaryScales.map(salaryScale => salaryScale.salaryScaleKey);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

}
