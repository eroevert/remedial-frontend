import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Dwfetable} from '../shared/dwfetable';
import {map} from 'rxjs/operators';

@Injectable()
export class DwfetableService {
  private urlEndPoint = 'http://localhost:8080/reporting';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getReportinData(dimension: String): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${dimension}`)
      .pipe(map(responce => responce['object'] as Dwfetable));
    /*return this.http.get(`${this.urlEndPoint}/${dimension}`)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });*/
  }

  getReportinDataRang(dimension: String, gestIni: String, gestFin: String): Observable<any> {
    return this.http.get(`${this.urlEndPoint}/${dimension}/${gestIni}/${gestFin}`)
      .pipe(map(responce => responce['object'] as Dwfetable));
    /*return this.http.get(`${this.urlEndPoint}/${dimension}`)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });*/
  }

}
