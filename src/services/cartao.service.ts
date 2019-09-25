import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cartao } from 'src/models/cartao';


const url = environment.url + '/cartao'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(cartao: Cartao): Observable<any> {
    return this.http.post(url + "/add", cartao);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(cartao): Observable<Cartao> {
    return this.http.put<Cartao>(url + '/update', cartao);
  }

  obterTodos(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}
