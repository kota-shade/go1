import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AuthService} from '@app/service/auth.service';
import {AuthGuardService} from '@app/service/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { FooterComponent } from '@app/layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
