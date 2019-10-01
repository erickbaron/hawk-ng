import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/models/produto';
import { Carrinho } from 'src/models/carrinho';

const url = environment.url + '/produtos'
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }


  obterTodos(): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id);
  }

  adicionar(produto: Carrinho): Observable<any> {
    return this.http.post(url + "/add", produto);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(produto): Observable<Carrinho> {
    return this.http.put<Carrinho>(url + '/update', produto);
  }

}