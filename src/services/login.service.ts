import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/models/login';


const url = environment.url + '/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  adicionar(login: Login): Observable<any> {
    return this.http.post(url + "/add", login);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(login): Observable<Login> {
    return this.http.put<Login>(url + '/update', login);
  }

  obterTodos(): Observable<Login[]> {
    return this.http.get<Login[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}