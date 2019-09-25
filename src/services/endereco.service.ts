import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoCliente } from 'src/models/endereco-cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const url = environment.url + "/address"

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { 
 }

  adicionar(endereco: EnderecoCliente): Observable<any> {
    return this.http.post(url + "/add", endereco);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(endereco): Observable<EnderecoCliente> {
    return this.http.put<EnderecoCliente>(url + '/update', endereco);
  }

  obterTodos(): Observable<EnderecoCliente[]> {
    return this.http.get<EnderecoCliente[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }


}