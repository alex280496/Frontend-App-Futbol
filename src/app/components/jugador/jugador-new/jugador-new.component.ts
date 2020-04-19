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
  ) { 
    this.jugador=new Jugador(null,'','','','','',null,null,null);
  }
  cargandoImagen(files:FileList){
    this.jugador.imagen=files[0];
      
    }
  ngOnInit() {
  }
  onSubmit(){
    this._jugadorService.savejugador(this.jugador,this.jugador.imagen).subscribe(
      response=>{
        this.jugador=response;
        console.log(this.jugador);
        this.guardarimagenjugador(this.jugador.id);
      },
      error=>{
        console.log(error);
      }
    );
  }
  guardarimagenjugador(id){
    this._jugadorService.guardarimagen(this.jugador.imagen,id).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
