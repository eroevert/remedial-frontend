import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';
import {EquipmentType} from '../shared/equipmentType';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class EquipmentTypeService {
  private urlEndPoint = 'http://localhost:8080/equipmentType';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getEquipmentTypes(): Observable<any> {
    return this.http.get(baseURL + 'equipmentType')
      .map((res) => {
        return res['object'];
      }).catch(error => {
        return error;
      });
  }

  getEquipmentType(id: string): Observable<EquipmentType> {
    return this.http.get<EquipmentType>(baseURL + 'equipmentTypes/' + id)
      .map(res => {
        return res;
      });
  }

  getEquipmentTypeIds(): Observable<number[]> {
    return this.getEquipmentTypes()
      .map(equipmentTypes => {
        return equipmentTypes.map(equipmentType => equipmentType.id);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
  getFeaturedEquipmentType(): Observable<EquipmentType> {
    return this.http.get<EquipmentType>(baseURL + 'equipmentTypes?featured=true')
      .map(res => {
        return res[0];
      });
  }
  createEquipmentType(equipmentType: EquipmentType): Observable<EquipmentType> {
    return this.http.post<EquipmentType>(baseURL + 'equipmentType', equipmentType, {headers: this.httpHeaders});
  }

  updateEquipmentType(equipmentType: EquipmentType): Observable<EquipmentType> {
    return this.http.put<EquipmentType>(baseURL + 'equipmentType', equipmentType, {headers: this.httpHeaders});
  }

/*
  deleteEquipmentType(equipmentType: EquipmentType): Observable<any> {
    return this.http.delete<EquipmentType>(baseURL + 'equipment/delete/'
      + equipmentType.equipmentTypeKey.toString(), {headers: this.httpHeaders});
  }
*/
  deleteEquipmentType(id: number): Observable<any> {
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
