import {Injectable} from '@angular/core';
import {Politic, PoliticNotification} from '../shared/politic';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Notification} from '../shared/notification';

@Injectable()
export class PoliticsService {

  public loadPolitics = new BehaviorSubject<boolean>(false);
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getPolitics(): Observable<any> {
    return this.http.get(baseURL + 'politics').pipe(map(responce => responce as Politic[]));
  }

  getPoliticById(id: number): Observable<any> {
    return this.http.get(baseURL + 'politics/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  createPolitic(politic: PoliticNotification): Observable<Politic> {
     return this.http.post<Politic>(baseURL + 'politics', politic, {headers: this.httpHeaders});
  }
  updatePolitic(politic: Politic): Observable<Politic> {
    return this.http.put<Politic>(baseURL + 'politics', politic, {headers: this.httpHeaders});
  }
  deletePolitic(politic: Politic): Observable<any> {
    return this.http.delete<EquipmentAssignment>(baseURL + 'politics/delete/'
      + politic.politicsKey, {headers: this.httpHeaders});
  }
}
