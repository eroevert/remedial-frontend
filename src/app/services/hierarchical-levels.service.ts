import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HierarchicalLevelsService {

  constructor(private http: HttpClient) { }
  getHierarchicalLevels(): Observable<any> {
    return this.http.get(baseURL + 'hierarchicallevel')
      .map((res) => {
        return res['object'];
      }).catch(error => {
        return error;
      });
  }
}
