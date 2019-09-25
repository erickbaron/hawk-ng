import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EnderecoCliente } from 'src/models/endereco-cliente';

const url = environment.url + "/addresses"
@Injectable({
    providedIn: 'root'
})
export class EnderecoClienteService {

    constructor(private http: HttpClient) { }
    // ajax

    obterTodos(): Observable<EnderecoCliente[]> {
        return this.http.get<EnderecoCliente[]>(url + "/obtertodos");

    }

    adicionar(endereco: EnderecoCliente): Observable<any> {
        return this.http.post(url + "/add", endereco);
      }
}