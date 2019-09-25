import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/models/produto';

const url = environment.url + '/produtos'
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

 
  obterTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }
  adicionar(produto: Produto): Observable<any> {
    return this.http.post(url + "/add", produto);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(produto): Observable<Produto> {
    return this.http.put<Produto>(url + '/update', produto);
  }

}