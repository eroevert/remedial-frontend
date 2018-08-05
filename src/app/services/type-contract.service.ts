import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {TypeContract} from '../shared/typeContract';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TypeContractService {

  constructor(private http: HttpClient) {
  }

  getTypeContracts(): Observable<any> {
    return this.http.get(baseURL + 'typeContract')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getTypeContractsFather(id: number): Observable<any> {
    return this.http.get(baseURL + 'typeContract/padre/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  saveTypeContract(typeContract: TypeContract): Observable<any> {
    typeContract.status = '1';
    return this.http.post(baseURL + 'typeContract', typeContract).map((res) => {
      return res;
    }).catch(error => {
      return error;
    });
  }

  getTypeContract(id: number): Observable<any> {
    return this.http.get(baseURL + 'typeContract/' + id)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getFeaturedTypeContract(): Observable<TypeContract> {
    return this.http.get<TypeContract>(baseURL + 'typeContract?featured=true')
      .map(res => {
        return res[0];
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  getTypeContractIds(): Observable<number[]> {
    return this.getTypeContracts()
      .map(typeContracts => {
        return typeContracts.map(typeContract => typeContract.typeContractKey);
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

}
