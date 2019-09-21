import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from 'src/models/categoria';

const url = environment.url + '/categorias/';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    
    constructor(private http: HttpClient) { }

    adicionar(categoria: Categoria): Observable<any> {
        return this.http.post(url + "adicionar", categoria);        
    }

    obtertodos(): Observable<Categoria[]> {
        return this.http
        .get<Categoria[]>(url + 'obtertodos')
    }
}