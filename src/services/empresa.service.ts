import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Empresa } from 'src/models/empresa';


const url = environment.url + '/empresa'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(empresa: Empresa): Observable<any> {
    return this.http.post(url + "/add", empresa);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(empresa): Observable<Empresa> {
    return this.http.put<Empresa>(url + '/update', empresa);
  }

  obterTodos(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}