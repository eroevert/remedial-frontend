import {Injectable, SystemJsNgModuleLoader} from '@angular/core';
import {baseURL} from '../shared/baseurl';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Organization} from '../shared/organization';
import {map} from 'rxjs/operators';
import {ReturnModel} from '../shared/returnModel';

@Injectable()
export class OrganizationService {
  constructor(private http: HttpClient) {
  }

  getOrganizationEmp(id: number): Observable<any> {
    /*return this.http.get<Organization>(baseURL + 'organization/' + id)
      .pipe(map(responce => responce['object']as Organization));*/
    return this.http.get(baseURL + 'organization/' + id)
      .map((res) => {
        return res['object'];
      }).catch(error => {
        return error;
      });
  }

  getOrganizations(): Observable<any> {
    return this.http.get(baseURL + 'organization')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getOrganizationsFather(id: number): Observable<any> {
    return this.http.get(baseURL + 'organization/padre/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  saveOrganization(organization: Organization): Observable<any> {
    organization.status = '1';
    return this.http.post(baseURL + 'organization', organization).map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
    } catch (e) {
      console.log(e);
      return e;
    }

  getOrganization(id: number): Observable<any> {
    return this.http.get(baseURL + 'organization/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  deleteOrganization(id: number): Observable<any> {
    return this.http.delete(baseURL + 'organization/' + id)
      .map((res) => {
        return res;
      }).catch((error) => {
        console.log('Error: ', error);
        return error;
      });
  }
  getOrganizationIds(): Observable<number[]> {
    return this.getOrganizations()
      .map(organizations => {
        return organizations.map(organization => organization.organizationKey);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}
