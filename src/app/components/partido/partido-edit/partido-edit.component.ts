import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {PartidoFutbol} from '../../../models/partido_futbol';
import {PartidoFutbolService} from '../../../services/partido_futbol.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-partido-edit',
  templateUrl: './partido-edit.component.html',
  styleUrls: ['./partido-edit.component.css'],
  providers:[PartidoFutbolService]
})
export class PartidoEditComponent implements OnInit {

  public partido:PartidoFutbol;
  public equipos:Equipo;
  public aux:number;
  constructor(
    private _partidoService:PartidoFutbolService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.partido=new PartidoFutbol(null,null,null,null);
  }

  ngOnInit() {
    this.equiposrivales();
    this._route.params.subscribe(
      params=>{
        let id=params ['id'];
        this._partidoService.getpartido(id).subscribe(
          response=>{
            this.partido=response[0];
            this.aux=response[0].id_equipo;
          },
          error=>{
            console.log(error);
          }
        );
      }
    );
    
  }
  onSubmit(){
    if(this.partido.equipo_id==null){
      this.partido.equipo_id=this.aux;
    }
    this._partidoService.updatepartido(this.partido,this.partido.id).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/partidos']);
      },
      error=>{
        console.log(error);
      }
    );
  }
  equiposrivales(){
    this._partidoService.getequipos().subscribe(
      response=>{
        this.equipos=response;
      },error=>{
        console.log(error);
      }
    );
  }

}
