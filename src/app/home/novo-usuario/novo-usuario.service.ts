import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario): Observable<NovoUsuario>{
    return this.http.post<NovoUsuario>('http://localhost:3000/user/signup', novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
