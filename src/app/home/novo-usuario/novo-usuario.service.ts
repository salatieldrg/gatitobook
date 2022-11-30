import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario>{
    return this.http.post<NovoUsuario>(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeUsuario}`);
  }
}
