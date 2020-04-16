import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {EquipoService} from '../../../services/equipo.service';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {Global} from '../../../services/global';

@Component({
  selector: 'app-equipo-show',
  templateUrl: './equipo-show.component.html',
  styleUrls: ['./equipo-show.component.css'],
  providers:[EquipoService]
})
export class EquipoShowComponent implements OnInit {
  public equipo:Equipo;
  public imgequipo:string;
  constructor(
    private _equipoService:EquipoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.imgequipo=Global.urlimgequipo;
  }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        let id=params['id']; //para obtenr el id del equipo a mostrar
        this._equipoService.getequipo(id).subscribe(
          response=>{
            this.equipo=response;
            console.log(this.equipo);
          },
          error=>{
            console.log(error);
          }
        );
      }
    );
   
  }

}
