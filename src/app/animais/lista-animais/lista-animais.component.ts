import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit{
  animais!: Animais;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ){}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe(
      (usuario) => {
        const nomeUsuario = usuario.name ?? '';
        this.animaisService.listaDoUsuario(nomeUsuario).subscribe(
          (animais) => {
            this.animais =  animais;
          }
        );
      }
    );
  }


}
