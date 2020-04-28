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
