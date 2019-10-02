import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EnderecoCliente } from 'src/models/endereco-cliente';


const url = environment.url + "/enderecosClientes"

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { 
 }

  adicionar(EnderecoCliente: EnderecoCliente): Observable<any> {
    return this.http.post(url + "/add", EnderecoCliente);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(EnderecoCliente): Observable<EnderecoCliente> {
    return this.http.put<EnderecoCliente>(url + '/update', EnderecoCliente);
  }

  obterTodos(): Observable<EnderecoCliente[]> {
    return this.http.get<EnderecoCliente[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }


}