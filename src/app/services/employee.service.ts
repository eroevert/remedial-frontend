import {Injectable} from '@angular/core';
import {Employeedata} from '../shared/employeedata';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {EquipmentAssignmentService} from './equipment-assignment.service';
import {OrganizationIds} from '../shared/politic';

@Injectable()
export class EmployeeService {
  private urlEndPoint = 'http://localhost:8080/employees';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private location: Location,
              private equipasService: EquipmentAssignmentService) {
  }

  getEmployees(): Observable<Employeedata[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(map(responce => responce['object'] as Employeedata[]));
  }

  getEmployeesByOrganization(organizationIds: OrganizationIds): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + '/by/organization', organizationIds, {headers: this.httpHeaders});
  }

  getEmployee(id: number): Observable<Employeedata> {
    // console.log(this.http.get<Employeedata>(`${this.urlEndPoint}/${id}`));
    return this.http.get<Employeedata>(`${this.urlEndPoint}/${id}`).pipe(map(responce => responce['object'] as Employeedata));
  }

  createEmployee(employee: Employeedata): Observable<Employeedata> {
    employee.organizationByOrganizationKey = employee.organizationKey;
    return this.http.post<Employeedata>(this.urlEndPoint, employee, {headers: this.httpHeaders});
  }

  updateEmployee(employee: Employeedata): Observable<Employeedata> {
    employee.organizationByOrganizationKey = employee.organizationKey;
    // return this.http.put<Employeedata>(`${this.urlEndPoint}/${employee.employeeKey}`, employee, {headers: this.httpHeaders});
    console.log(employee);
    // return this.http.post<Employeedata>(this.urlEndPoint, employee, {headers: this.httpHeaders});
    return this.http.put<Employeedata>(this.urlEndPoint, employee, {headers: this.httpHeaders});

  }
  deleteEmployee(id: number): Observable<Employeedata> {
    console.log(`${this.urlEndPoint}/delete/${id}`);

    return this.http.delete<Employeedata>(`${this.urlEndPoint}/delete/${id}`, {headers: this.httpHeaders});
  }


  deleteEmployee2(id: number): Observable<any> {
    console.log(`${this.urlEndPoint}/delete/${id}`);
    return this.http.delete(`${this.urlEndPoint}/delete/${id}`)
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  updateEmployee2(employee: Employeedata): Observable<any> {
    console.log(employee);
    return this.http.put<Employeedata>(this.urlEndPoint, employee)
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });

  }
}
