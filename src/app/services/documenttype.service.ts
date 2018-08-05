import {Injectable} from '@angular/core';
import {Documenttype} from '../shared/documenttype';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DocumenttypeService {
  private urlEndPoint = 'http://localhost:8080/documenttypes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getDocumenttypes(): Observable<Documenttype[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(map(responce => responce as Documenttype[]));
    // return of(DOCUMENTTYPES);
  }

  createDocumenttype(documenttype: Documenttype): Observable<Documenttype> {
    console.log(documenttype);
    return this.http.post<Documenttype>(this.urlEndPoint, documenttype, {headers: this.httpHeaders});
    // return this.http.post<Documenttype>(this.urlEndPoint, documenttype, {headers: this.httpHeaders});
  }

  deleteDocumenttype(id: number): Observable<Documenttype> {
    console.log(`${this.urlEndPoint}/delete/${id}`);
    return this.http.delete<Documenttype>(`${this.urlEndPoint}/delete/${id}`, {headers: this.httpHeaders});
  }
}


