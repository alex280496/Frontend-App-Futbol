import { Component, OnInit } from '@angular/core';
import {TarjetaRoja} from '../../../models/t_roja';
import {Jugador} from '../../../models/jugador';
import {TarjetaRojaService} from '../../../services/t_roja.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-t-rojas',
  templateUrl: './t-rojas.component.html',
  styleUrls: ['./t-rojas.component.css'],
  providers:[TarjetaRojaService]
})
export class TRojasComponent implements OnInit {
  public tarjeta_roja:TarjetaRoja;
  constructor(
    private _tarjetaRojaService:TarjetaRojaService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.listarTarjetas();
  }
  listarTarjetas(){
    this._tarjetaRojaService.getrojas().subscribe(
      response=>{
        this.tarjeta_roja=response;
        console.log(this.tarjeta_roja);
      },
      error=>{
        console.log(error);
      }
    );
  }
  delete(id){
    this._tarjetaRojaService.deletetarjeta(id).subscribe(
      response=>{
        console.log(response);
        this.listarTarjetas();
      },
      error=>{
        console.log(error);
      }
    );
  }

}
