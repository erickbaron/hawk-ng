import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Financa } from 'src/models/financa';

const url = environment.url + '/financa'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(financa: Financa): Observable<any> {
    return this.http.post(url + "/add", financa);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(financa): Observable<Financa> {
    return this.http.put<Financa>(url + '/update', financa);
  }

  obterTodos(): Observable<Financa[]> {
    return this.http.get<Financa[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }
}