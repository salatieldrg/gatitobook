import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
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
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param) => {
        this.animais = this.activatedRoute.snapshot.data['animais'];
      }
    );
  }

}
