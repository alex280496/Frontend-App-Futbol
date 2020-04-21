import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../../models/jugador';
import {JugadorService}from '../../../services/jugador.service';
import {Global} from '../../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Equipo } from '../../../models/equipo';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-jugador-edit',
  templateUrl: './jugador-edit.component.html',
  styleUrls: ['./jugador-edit.component.css'],
  providers:[JugadorService]
})
export class JugadorEditComponent implements OnInit {
  public jugador:Jugador;
  public urljugador:string;
  public equipos:Equipo;
  public imagen:File;
  public aux:number;
  constructor(
    private _jugadorService:JugadorService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.urljugador=Global.urlimgjugador;
    this.jugador=new Jugador(null,'','','','','',null,null,null,null);
  }
  cargandoImagen(files:FileList){
    this.imagen=files[0];
      
    }
  ngOnInit() {
    this.llenardatos();
    this._jugadorService.getequipos().subscribe(
      response=>{
        this.equipos=response;
        console.log(this.equipos);
      },
      error=>{

      }
    );
  }
  onSubmit(){
    if(this.jugador.equipo_id==null){
      this.jugador.equipo_id=this.aux;
    }
    
    this._jugadorService.updatejugador(this.jugador,this.jugador.id).subscribe(
      response=>{
        this.jugador=response;
        console.log(this.jugador);
        this.guardarimagenjugador(this.jugador.id);
      },
      error=>{

      }
    );
  }
  llenardatos(){
    this._route.params.subscribe(
      params=>{
        let id=params['id'];
        this._jugadorService.getjugador(id).subscribe(
          response=>{
            this.jugador=response[0];
            console.log(this.jugador);
            this.aux=response[0].id_equipo;
            console.log(this.aux);
            //el auxiliar sirve en caso que no se toque el select de los equipos
          },
          error=>{
            console.log(error);
          }
        );
      }
    );
  }
  guardarimagenjugador(id){
    this._jugadorService.guardarimagen(this.imagen,id).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/jugadores']);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
