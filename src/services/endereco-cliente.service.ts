import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EnderecoCliente } from 'src/models/endereco-cliente';

const url = environment.url + "/enderecoClientes"
@Injectable({
    providedIn: 'root'
})
export class EnderecoClienteService {

    constructor(private http: HttpClient) { }
    // ajax


    adicionar(endereco: EnderecoCliente): Observable<any> {
        return this.http.post(url + "/add", endereco);
    }

    alterar(endereco): Observable<EnderecoCliente> {
        return this.http.put<EnderecoCliente>(url + '/update', endereco);
      }

    apagar(id: number): Observable<any> {
        return this.http.delete(url + "/delete?id=" + id);
    }

    obterTodos(): Observable<EnderecoCliente[]> {
        return this.http.get<EnderecoCliente[]>(url + "/obtertodos");
    }

    obterPeloId(id: number): Observable<any> {
        return this.http.get<any>(url + "/obterpeloid?id=" + id);
    }

}