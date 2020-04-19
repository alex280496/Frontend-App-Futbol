import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../../models/jugador';
import {JugadorService} from '../../../services/jugador.service';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
  providers:[JugadorService]
})
export class JugadoresComponent implements OnInit {
  public jugadores:Jugador;
  constructor(
    private _jugadorService:JugadorService
  ) { }

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
