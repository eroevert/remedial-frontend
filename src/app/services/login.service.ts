import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {User} from '../shared/user';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(post: User): Observable<any> {
    console.log(post);
    const getLoginUrl = baseURL + 'login' ;
    return this.http.post(getLoginUrl, post)
      .map(
        res => {
          if (res['code'] === 1) {
            localStorage.setItem('currentUser', JSON.stringify(res['object']));
          }
          return res;
        },
        err => {
          return err;
        }
      );
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
