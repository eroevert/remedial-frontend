import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Dwfechart} from '../shared/dwfechart';

@Injectable()
export class DwfechartService {
  private urlEndPoint = 'http://localhost:8080/reporting/chart';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getReportinDataChart(dimension: String): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${dimension}`)
      .pipe(map(responce => responce['object'] as Dwfechart));
  }

  getReportinDataChartRan(dimension: String, ini: String, fn: String): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${dimension}/${ini}/${fn}`)
      .pipe(map(responce => responce['object'] as Dwfechart));
  }

}
