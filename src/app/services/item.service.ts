import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Item} from '../shared/item';
import {map} from 'rxjs/operators';

@Injectable()
export class ItemService {
  private urlEndPoint = 'http://localhost:8080/item';
  constructor(private http: HttpClient) {
  }

  getItems(): Observable<any> {
    return this.http.get(baseURL + 'item')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getItemsOrganizationKey(id: number): Observable<any> {
    return this.http.get(baseURL + 'item/organization/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  saveItem(item: Item): Observable<any> {
    item.status = '1';
    return this.http.post(baseURL + 'item', item).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }
  deleteItem(id: number): Observable<any> {
    return this.http.get(baseURL + 'item/delete/' + id).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }
  getItem(id: number): Observable<any> {
    return this.http.get(baseURL + 'item/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }
  getItemsEmp(): Observable<any> {
    /*return this.http.get(this.urlEndPoint)
      .pipe(map(responce => responce['Object'] as Item[]));*/
    return this.http.get(this.urlEndPoint)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getItemEmp(id: number): Observable<Item> {
    return this.http.get(this.urlEndPoint + '/' + id)
      .pipe(map(responce => responce['Object'] as Item));
  }
}
