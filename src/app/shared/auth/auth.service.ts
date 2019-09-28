  
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor() {}

  signupUser(email: string, senha: string) {
    // inserir codigo
  }

  signinUser(email: string, senha: string) {
    // inserir codigo
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // verificar token
    return true;
  }
}