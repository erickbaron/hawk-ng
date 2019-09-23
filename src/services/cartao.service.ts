import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cartao } from 'src/models/cartao';

const url = environment.url + "/card"
@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  constructor(private http: HttpClient) { }

  // ajax
//   obterTodos(): Observable<Cartao[]> {
//     return this.http.get<Cartao[]>(url + "/obtertodos");
//   }

//   obterPeloId(id: number): Observable<any> {
//     return this.http.get<any>(url + "/obterpeloid?id=" + id); 
//   }

//   alterar(cartao): Observable<Cartao> { 
//     return this.http.put<Cartao>(url + '/update', cartao);
//   }

  adicionar(cartao: Cartao): Observable<any> {
    return this.http.post(url + "/add", cartao);
  }

//   apagar(id: number): Observable<any> {
//     return this.http.delete(url + "/delete?id=" + id);
//   }
}
