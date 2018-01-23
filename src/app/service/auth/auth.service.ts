import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { LoginData } from '@app/service/auth/loginData';
import {Subscription} from 'rxjs/Subscription';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {map, filter, scan, catchError} from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  static readonly OK = 0;
  static readonly NOT_AUTH = -1;


  private userData = {};
  /**
   * Состояние авторизации.
   * @type {boolean}
   */
  private loginStatus = AuthService.OK;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  public login(loginData: LoginData): Observable<number> {
    // const ret = new Observable((observer) => {
    //   setTimeout(function(){
    //       // observer.next('2222');
    //        observer.error('3333');
    //       observer.complete();
    //   }, 2000);
    // });
    //
    // return ret;

    return this.http
      .post<number>('/login', loginData, {headers: this.headers})
      .map(data => {
        this.loginStatus = data;
        return this.loginStatus;
      })
      .catch((err, caught) => {
        this.loginStatus = err.status;
        return new Observable<number>(observer => {
          observer.error(err);
          observer.complete();
        });
      })
      ;
  }

//   /**
//    * выполняет залогинивание клиента
//    * @param {LoginData} loginData
//    * @returns {Subscription}
//    */
//   login(loginData: LoginData): Observable<any> {
//     console.log('loginData = ', loginData);
//
//     const ret: Observable<any> = new Observable<any>();
//
//     let req = this.http.post('/login', loginData, {headers: this.headers});
//      // req.map(data => {
//      //     return true;
//      //   });
//
//     req.pipe(
//       map(data => {
//         return true;
//       }),
//       catchError((err: any) => {
//         return new Observable<boolean>(observer => {
//           observer.complete();
//         });
//       })
//     );
//     return req;
//
//     // req.pipe(
//     //   tap(data => {
//     //
//     //   }),
//     //   catchError( (err: any) => {
//     //       let ret =  new Observable<any>();
//     //       return ret;
//     //   })
//     // );
//
//     // let ret: Subscription = req.subscribe(data => {
//     //     console.log('GET DATA = ', data);
//     //   },
//     //   (err: HttpErrorResponse) => {
//     //     console.log('ERROR = ', err);
//     //     this.loginStatus = true;
//     //     console.log('status0 = ', this.loginStatus);
//     //   }
//     // );
//     // console.log('status = ', this.loginStatus);
//     // console.log('ret = ', ret);
// //    return req;
//   }

  /**
   * Возвращает залогинен ли юзер
   * @returns {boolean}
   */
  public isLoggedIn() {
    return this.loginStatus;
  }

  /**
   * возвращает данные об игроке
   * @returns {{}}
   */
  getUserData() {
    return this.userData;
  }
}
