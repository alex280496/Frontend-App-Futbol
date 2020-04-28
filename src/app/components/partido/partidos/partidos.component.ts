import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {PartidoFutbol} from '../../../models/partido_futbol';
import {PartidoFutbolService} from '../../../services/partido_futbol.service';
@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
  providers:[PartidoFutbolService]
})
export class PartidosComponent implements OnInit {
  public partidos:PartidoFutbol;
  constructor(
    private _partidoService:PartidoFutbolService
  ) { }

  ngOnInit() {
    this.listarpartidos();
  }
  delete(id){
    console.log(id);
    this._partidoService.deletepartido(id).subscribe(
      response=>{
        console.log(response);
        this.listarpartidos();
      },
      error=>{
        console.log(error);
      }
    );
  }
  listarpartidos(){
    this._partidoService.getpartidos().subscribe(
      response=>{
        this.partidos=response;
        console.log(this.partidos);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
