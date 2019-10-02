import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Compra } from 'src/models/compra';


const url = environment.url + '/compras'

@Injectable({
    providedIn: 'root'
})
export class CompraService {

    constructor(private http: HttpClient) { }

    adicionar(compra: Compra): Observable<any> {
        return this.http.post(url + '/add', compra);
    }

    apagar(id: number): Observable<any> {
        return this.http.delete(url + '/delete?id=' + id);
    }

    alterar(compra): Observable<any> {
        return this.http.put<Compra>(url + '/update', compra);
    }

    obterTodos(): Observable<any> {
        return this.http.get<Compra[]>(url + '/obtertodos');
    }

    obterPeloId(id: number): Observable<any> {
        return this.http.get<any>(url + '/obterpeloid?id=' + id);
    }
}