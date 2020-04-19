import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../../models/jugador';
import {JugadorService} from '../../../services/jugador.service';
import {Equipo} from '../../../models/equipo';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-jugador-new',
  templateUrl: './jugador-new.component.html',
  styleUrls: ['./jugador-new.component.css'],
  providers:[JugadorService]
})
export class JugadorNewComponent implements OnInit {
  public jugador:Jugador;
  public equipos:Equipo;
  public imagen:File;
  constructor(
    private _jugadorService:JugadorService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.jugador=new Jugador(null,'','','','','',null,null,null,null);
  }
  cargandoImagen(files:FileList){
    this.imagen=files[0];
      
    }
  ngOnInit() {
    this._jugadorService.getequipos().subscribe(
      response=>{
        this.equipos=response;
        console.log(this.equipos);
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  onSubmit(){
    this._jugadorService.savejugador(this.jugador).subscribe(
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
