import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/models/profile';

const url = environment.url + '/profile'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  adicionar(profile: Profile): Observable<any> {
    return this.http.post(url + "/add", profile);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(url + "/delete?id=" + id);
  }

  alterar(profile): Observable<Profile> {
    return this.http.put<Profile>(url + '/update', profile);
  }

  obterTodos(): Observable<Profile[]> {
    return this.http.get<Profile[]>(url + "/obtertodos");
  }

  obterPeloId(id: number): Observable<any> {
    return this.http.get<any>(url + "/obterpeloid?id=" + id); 
  }

}
