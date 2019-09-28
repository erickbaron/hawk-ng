import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/login';
import { Observable } from 'rxjs';
import { UsuarioResponse } from 'src/models/usuario-response';
import { JwtHelperService } from '@auth0/angular-jwt';

const url = environment.url + '/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwthelper = new JwtHelperService();

  constructor(
    private http: HttpClient
    ) { }
    login(usuario: Usuario): Observable<UsuarioResponse> {
      return this.http.post<UsuarioResponse>(url + '/login', usuario);
    }

    logout() {
      return this.http.get<UsuarioResponse>(url + '/logout');
    }

    getId() {
      return localStorage.getItem('UsuarioId');
    }

    getToken(): string {
      return localStorage.getItem('UsuarioToken');
    }
  }
