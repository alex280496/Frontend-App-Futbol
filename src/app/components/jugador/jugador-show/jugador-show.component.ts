import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../../models/jugador';
import {JugadorService} from '../../../services/jugador.service';
import {Global} from '../../../services/global';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-jugador-show',
  templateUrl: './jugador-show.component.html',
  styleUrls: ['./jugador-show.component.css'],
  providers:[JugadorService]
})
export class JugadorShowComponent implements OnInit {
  public jugador:Jugador;
  public urlimagen:string;
  constructor(
    private _jugadorService:JugadorService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.urlimagen=Global.urlimgjugador;
   }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        let id= params['id'];
        this._jugadorService.getjugador(id).subscribe(
          response=>{
            this.jugador=response;
            console.log(this.jugador);
          },
          error=>{
            console.log(error);
          }
        );
      }
    );
  }

}
