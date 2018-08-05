import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {PositionOrg} from '../shared/position';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PositionService {

  constructor(private http: HttpClient) {
  }

  getPositions(): Observable<any> {
    return this.http.get(baseURL + 'position')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getPositionsFather(id: number): Observable<any> {
    return this.http.get(baseURL + 'position/padre/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  savePosition(position: PositionOrg): Observable<any> {
    position.status = '1';
    return this.http.post(baseURL + 'position', position).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }

  getPosition(id: number): Observable<any> {
    return this.http.get(baseURL + 'position/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getFeaturedPosition(): Observable<Position> {
    return this.http.get<Position>(baseURL + 'position?featured=true')
      .map(res => {
        return res[0];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getPositionIds(): Observable<number[]> {
    return this.getPositions()
      .map(positions => {
        return positions.map(position => position.positionKey);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

}
