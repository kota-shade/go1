import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';

// import { LoginData } from '@app/login/loginData';
import { NgForm } from '@angular/forms';
import { AuthService } from '@app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {
  // @Input() loginData: LoginData = new LoginData();

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService
    // private http: HttpClient
  ) { }

  ngOnInit() {
  }

  openRegisterForm() {
    // перебросить на форму регистрации
  }

  onSubmit(loginForm: NgForm) {
    return this.authService.login(loginForm.value);
  }

  resetPasswd() {
    // отправить на страницу сброса пароля.
  }
}
