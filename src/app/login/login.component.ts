import { Component, OnInit } from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  openRegisterForm() {
    // перебросить на форму регистрации
  }

  login() {
    // обработать данные формы логина
  }

  resetPasswd() {
    // отправить на страницу сброса пароля.
  }
}
