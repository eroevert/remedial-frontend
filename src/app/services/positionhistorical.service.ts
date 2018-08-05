import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {PositionHistorical} from '../shared/positionHistorical';

@Injectable()
export class PositionhistoricalService {
  private urlEndPoint = 'http://localhost:8080/positionhistorical';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) {
  }


  getPositionHistorical(id: number): Observable<PositionHistorical> {
    return this.http.get(this.urlEndPoint + '/' + id)
      .pipe(map(responce => responce['object'] as PositionHistorical));
  }

  getPositionHistoricalsEmployee(id: number): Observable<PositionHistorical[]> {
    return this.http.get(this.urlEndPoint + '/employee/' + id)
      .pipe(map(responce => responce['object'] as PositionHistorical[]));
  }

  getPositionHistoricalEmp(id: number): Observable<PositionHistorical> {
    return this.http.get(this.urlEndPoint + '/employee/' + id)
      .pipe(map(responce => responce['object'] as PositionHistorical));
  }

  createPositionHistorical(positionhistorical: PositionHistorical): Observable<PositionHistorical> {
    positionhistorical.employeeByEmployeeKey = positionhistorical.employeeKey;
    return this.http.post<PositionHistorical>(this.urlEndPoint, positionhistorical, {headers: this.httpHeaders});
  }

  updatePositionaHistorical(positionhistorical: PositionHistorical): Observable<PositionHistorical> {
    positionhistorical.employeeByEmployeeKey = positionhistorical.employeeKey;
    return this.http.put<PositionHistorical>(this.urlEndPoint, positionhistorical, {headers: this.httpHeaders});
  }

  deletePositionHistoricalEmp(id: number): Observable<PositionHistorical> {
    return this.http.delete<PositionHistorical>(`${this.urlEndPoint}/delete/${id}`, {headers: this.httpHeaders});
  }

  updatePositionalHistorical(positionhistorical: PositionHistorical): Observable<any> {
    positionhistorical.employeeByEmployeeKey = positionhistorical.employeeKey;
    return this.http.put<PositionHistorical>(this.urlEndPoint, positionhistorical)
      .map((res) => {
        return res;
      }).catch(error => {
        console.log(' este es error: ' + error);
        return error;
      });

  }
}
