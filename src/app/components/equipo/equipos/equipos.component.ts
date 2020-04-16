import { Component, OnInit } from '@angular/core';
import { Equipo} from '../../../models/equipo';
import { EquipoService}  from '../../../services/equipo.service';
import {Global} from '../../../services/global';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  providers:[EquipoService]
})
export class EquiposComponent implements OnInit {
  public equipos:Equipo;
  public imgequipo:string;
  constructor(
    private _equipoService:EquipoService
  ) { 
    this.imgequipo=Global.urlimgequipo;
  }

  ngOnInit() {
    this._equipoService.getequipos().subscribe(
      response=>{
        this.equipos=response;
        console.log(this.equipos);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
