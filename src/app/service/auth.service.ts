import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private userData = {};

  constructor() { }

  /**
   * Возвращает залогинен ли юзер
   * @returns {boolean}
   */
  isLoggedIn() {
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
