import {Injectable, SystemJsNgModuleLoader} from '@angular/core';
import {baseURL} from '../shared/baseurl';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {TypeContact} from '../shared/typeContact';

@Injectable()
export class TypeContactService {
  constructor(private http: HttpClient) {
  }
  saveTypeContact(typeContract: TypeContact): Observable<any> {
    return this.http.post(baseURL + 'typeContact', typeContract).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }
  deleteTypeContact(id: number): Observable<any> {
    return this.http.delete(baseURL + 'typeContact/delete/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
}
