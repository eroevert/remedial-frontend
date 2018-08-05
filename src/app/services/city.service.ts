import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {City} from '../shared/city';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {
  }

  getCitys(): Observable<any> {
    return this.http.get(baseURL + 'city')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getCitysFather(id: number): Observable<any> {
    return this.http.get(baseURL + 'city/padre/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  saveCity(city: City): Observable<any> {
    return this.http.post(baseURL + 'city', city).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }

  getCity(id: number): Observable<any> {
    return this.http.get(baseURL + 'city/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getFeaturedCity(): Observable<City> {
    return this.http.get<City>(baseURL + 'city?featured=true')
      .map(res => {
        return res[0];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getCityIds(): Observable<number[]> {
    return this.getCitys()
      .map(citys => {
        return citys.map(city => city.cityKey);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

}
