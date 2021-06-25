import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  setLogin(value:boolean) {
    this.isLoggedIn = value;
  }

  setLogout(value:boolean) {
    this.isLoggedIn = value;
  }

  getLogin() {
    return this.isLoggedIn;
  }
}
