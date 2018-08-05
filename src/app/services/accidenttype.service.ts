import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Accidenttypedata} from '../shared/accidenttypedata';

@Injectable()
export class AccidenttypeService {

  private urlEndPoint = 'http://localhost:8080/accidentType';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getAccidenttypes(): Observable<Accidenttypedata[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(map(responce => responce['object'] as Accidenttypedata[]));
  }

  getAccidenttype(id: number): Observable<Accidenttypedata> {
    console.log(this.http.get<Accidenttypedata>(`${this.urlEndPoint}/${id}`));
    return this.http.get<Accidenttypedata>(`${this.urlEndPoint}/${id}`);
  }

  createAccidenttype(employee: Accidenttypedata): Observable<Accidenttypedata> {
    return this.http.post<Accidenttypedata>(this.urlEndPoint, employee, {headers: this.httpHeaders});
  }

}
