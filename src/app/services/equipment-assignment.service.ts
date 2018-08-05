import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {EquipmentAssignment} from '../shared/equipmentAssignment';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EquipmentAssignmentService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getEquipmentAssignments(): Observable<any> {
    return this.http.get(baseURL + 'equipmentAssignment')
      .map((res) => {
        console.log('Equipents: ', res);
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getEquipmentByEmployeeKey(id: String): Observable<any> {
    return this.http.get(baseURL + 'equipmentAssignment/employeeKey/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getEmployeeWithEquipmentAssignments(): Observable<any> {
    return this.http.get(baseURL + 'equipmentAssignment/employeesWithAssignments' )
      .map((res) => {
        return res['object'];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getEquipmentAssignment(id: number): Observable<EquipmentAssignment> {
    return this.http.get<EquipmentAssignment>(baseURL + 'equipmentAssignments/' + id)
      .map(res => {
        return res;
      });
  }

  getEquipmentAssignmentIds(): Observable<number[]> {
    return this.getEquipmentAssignments()
      .map(equipmentAssignment => {
        return equipmentAssignment.map(equipmentAsign => equipmentAsign.id);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  createAssignment(equipmentAssignment: EquipmentAssignment): Observable<EquipmentAssignment> {
    return this.http.post<EquipmentAssignment>(baseURL + 'equipmentAssignment', equipmentAssignment, {headers: this.httpHeaders});
  }

  updateAssignment(equipmentAssignment: EquipmentAssignment): Observable<EquipmentAssignment> {
    return this.http.put<EquipmentAssignment>(baseURL + 'equipmentAssignment', equipmentAssignment, {headers: this.httpHeaders});
  }

  deleteAssignment(equipmentAssignment: EquipmentAssignment): Observable<any> {
    return this.http.delete<EquipmentAssignment>(baseURL + 'equipmentAssignment/delete/'
      + equipmentAssignment.equipmentAssignmentKey.toString(), {headers: this.httpHeaders});
  }


}
