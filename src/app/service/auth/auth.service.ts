import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { LoginData } from '@app/service/auth/loginData';

@Injectable()
export class AuthService {
  private userData = {};
  /**
   * Состояние авторизации.
   * @type {boolean}
   */
  private loginStatus = false;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  login(loginData: LoginData): boolean {
    let ret = false;
    console.log('loginData = ', loginData);

    let res = this.http
        .post('/login', loginData, {headers: this.headers})
        .subscribe(
          data => {
            console.log('GET DATA = ', data);
          },
          (err: HttpErrorResponse) => {
            console.log('ERROR = ', err);
          }
        )
      // .pipe()
    ;
    console.log('RES = ', res);




    this.loginStatus = ret;
    return ret;
  }

  /**
   * Возвращает залогинен ли юзер
   * @returns {boolean}
   */
  public isLoggedIn() {
    return true;
  }

  /**
   * возвращает данные об игроке
   * @returns {{}}
   */
  getUserData() {
    return this.userData;
  }
}
