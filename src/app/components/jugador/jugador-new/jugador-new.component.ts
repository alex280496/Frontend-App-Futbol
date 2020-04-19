import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../../models/jugador';
import {JugadorService} from '../../../services/jugador.service';
@Component({
  selector: 'app-jugador-new',
  templateUrl: './jugador-new.component.html',
  styleUrls: ['./jugador-new.component.css'],
  providers:[JugadorService]
})
export class JugadorNewComponent implements OnInit {
  public jugador:Jugador;
  constructor(
    private _jugadorService:JugadorService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this._jugadorService.savejugador(this.jugador).subscribe(
      response=>{
        this.jugador=response;
        console.log(this.jugador);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
