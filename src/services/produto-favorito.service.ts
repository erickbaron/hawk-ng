import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProdutoFavorito } from 'src/models/produto-favorito';


const url = environment.url + '/produtofav'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(produtoFavorito: ProdutoFavorito): Observable<any> {
    return this.http.post(url + "/add", produtoFavorito);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(produtoFavorito): Observable<ProdutoFavorito> {
    return this.http.put<ProdutoFavorito>(url + '/update', produtoFavorito);
  }

  obterTodos(): Observable<ProdutoFavorito[]> {
    return this.http.get<ProdutoFavorito[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }
}