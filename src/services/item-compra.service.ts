import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ItemCompra } from 'src/models/item-compra';


const url = environment.url + '/itemCompra'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(itemCompra: ItemCompra): Observable<any> {
    return this.http.post(url + "/add", itemCompra);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(itemCompra): Observable<ItemCompra> {
    return this.http.put<ItemCompra>(url + '/update', itemCompra);
  }

  obterTodos(): Observable<ItemCompra[]> {
    return this.http.get<ItemCompra[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}