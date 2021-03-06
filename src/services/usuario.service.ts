import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/models/usuario';


const url = environment.url + '/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  adicionar(usuario: Usuario): Observable<any> {
    return this.http.post(url + '/add', usuario);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + '/delete?id=' + id);
  }

  alterar(usuario): Observable<Usuario> {
    return this.http.put<Usuario>(url + '/update', usuario);
  }

  obterTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(url + '/obtertodos');
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + '/obterpeloid?id=' + id);
  }
}
