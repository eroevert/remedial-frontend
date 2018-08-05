import {Injectable, SystemJsNgModuleLoader} from '@angular/core';
import {baseURL} from '../shared/baseurl';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Equipment} from '../shared/equipment';


@Injectable()
export class EquipmentService  {
  private urlEndPoint = 'http://localhost:8080/equipment';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  getEquipments(): Observable<any> {
    return this.http.get(baseURL + 'equipment')
      .map((res) => {
        console.log('equipments: ', res);
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  saveEquipment(equipment: Equipment): Observable<any> {
    equipment.status = '1';
    try {
      this.http.post(baseURL + 'equipment', equipment).subscribe(
        data => {
          console.log(data);
          return data['object'];
        },
        error => {
          console.log(error);
          return error;
        }
      );
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  getEquipment(id: string): Observable<Equipment> {
    return this.http.get<Equipment>(baseURL + 'equipment/' + id)
      .map(res => {
        return res['object'];
      });
  }

  getFeaturedEquipment(): Observable<Equipment> {
    return this.http.get<Equipment>(baseURL + 'equipment?featured=true')
      .map(res => {
        return res[0];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getEquipmentIds(): Observable<number[]> {
    return this.getEquipments()
      .map(equipments => {
        return equipments.map(equipment => equipment.equipmentKey);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
  createEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(baseURL + 'equipment', equipment, {headers: this.httpHeaders});
  }

  updateEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(baseURL + 'equipment', equipment, {headers: this.httpHeaders});
  }

  /*deleteEquipment(equipment: Equipment): Observable<any> {
    return this.http.delete<Equipment>(baseURL + 'equipment/delete/'
      + equipment.equipmentKey.toString(), {headers: this.httpHeaders});
  }*/
  deleteEquipment(id: number): Observable<any> {
    console.log(`${this.urlEndPoint}/delete/${id}`);
    return this.http.delete(`${this.urlEndPoint}/delete/${id}`)
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}
