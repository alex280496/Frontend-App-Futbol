import { Component, OnInit } from '@angular/core';
import {TarjetaRoja} from '../../../models/t_roja';
import {Jugador} from '../../../models/jugador';
import {TarjetaRojaService} from '../../../services/t_roja.service';
import {Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-t-roja-new',
  templateUrl: './t-roja-new.component.html',
  styleUrls: ['./t-roja-new.component.css'],
  providers:[TarjetaRojaService]
})
export class TRojaNewComponent implements OnInit {
  public jugadores:Jugador
  public tarjeta_roja:TarjetaRoja;
  constructor(
    private _tarjetaRojaService:TarjetaRojaService,
    private _router:Router
  ) { 
    this.tarjeta_roja=new TarjetaRoja(null,null,null,null);
  }

  ngOnInit() {
    this.datosjugadores();
  }
  onSubmit(){
    this._tarjetaRojaService.savetrojas(this.tarjeta_roja).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/trojas']);
      },error=>{
        console.log(error);
      }
    );
  }
  datosjugadores(){
    this._tarjetaRojaService.getjugadores().subscribe(
      response=>{
        this.jugadores=response;
        
      },
      error=>{
        console.log(error);
      }
    );
  }

}
