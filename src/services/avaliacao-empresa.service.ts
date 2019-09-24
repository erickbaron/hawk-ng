import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AvaliacaoEmpresa } from 'src/models/avaliacao-empresa';


const url = environment.url + '/avaliacaoEmpresa'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(avaliacaoEmpresa: AvaliacaoEmpresa): Observable<any> {
    return this.http.post(url + "/add", avaliacaoEmpresa);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(avaliacaoEmpresa): Observable<AvaliacaoEmpresa> {
    return this.http.put<AvaliacaoEmpresa>(url + '/update', avaliacaoEmpresa);
  }

  obterTodos(): Observable<AvaliacaoEmpresa[]> {
    return this.http.get<AvaliacaoEmpresa[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}