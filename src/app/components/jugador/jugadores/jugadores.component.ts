import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../../models/jugador';
import {JugadorService} from '../../../services/jugador.service';
import {Global} from '../../../services/global';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
  providers:[JugadorService]
})
export class JugadoresComponent implements OnInit {
  public jugadores:Jugador;
  public urljugador:string;
  constructor(
    private _jugadorService:JugadorService
  ) {
    this.urljugador=Global.urlimgjugador;
   }

  ngOnInit() {
    this._jugadorService.getjugadores().subscribe(
      response=>{
        console.log(response);
        this.jugadores=response;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
