import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';

import { LoginData } from '@app/login/loginData';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import {HttpParamsOptions} from '@angular/common/http/src/params';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  @Input() loginData: LoginData = new LoginData();

  private _headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    public activeModal: NgbActiveModal,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  openRegisterForm() {
    // перебросить на форму регистрации
  }

  login() {
    // обработать данные формы логина
    console.log('TEST', this.loginData);
    let res = this.http
        .post('/login', this.loginData, {headers: this._headers})
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
  }

  resetPasswd() {
    // отправить на страницу сброса пароля.
  }
}
