import {Accidentdata} from '../shared/accidentdata';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccidentService {
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAccidents(): Observable<any> {
    return this.http.get(baseURL + 'accidents')
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  createAccident(accident: Accidentdata): Observable<Accidentdata> {
    console.log('Accident: ', accident);
    return this.http.post<Accidentdata>(baseURL + 'accidents', accident, {headers: this.httpHeaders});
  }

  updateAssignment(accident: Accidentdata): Observable<Accidentdata> {
    return this.http.put<Accidentdata>(baseURL + 'accidents', accident, {headers: this.httpHeaders});
  }

  deleteAssignment(accident: Accidentdata): Observable<any> {
    return this.http.delete<Accidentdata>(baseURL + 'accidents/delete/'
      + accident.accidentKey.toString(), {headers: this.httpHeaders});
  }

}
