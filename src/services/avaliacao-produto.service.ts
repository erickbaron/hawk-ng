import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AvaliacaoProduto } from 'src/models/avaliacao-produto';


const url = environment.url + '/avaliacaoProduto'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(avaliacaoProduto: AvaliacaoProduto): Observable<any> {
    return this.http.post(url + "/add", avaliacaoProduto);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(avaliacaoProduto): Observable<AvaliacaoProduto> {
    return this.http.put<AvaliacaoProduto>(url + '/update', avaliacaoProduto);
  }

  obterTodos(): Observable<AvaliacaoProduto[]> {
    return this.http.get<AvaliacaoProduto[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}