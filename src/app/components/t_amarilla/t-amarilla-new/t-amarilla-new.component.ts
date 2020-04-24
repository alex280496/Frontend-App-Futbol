import { Component, OnInit } from '@angular/core';
import {TarjetaAmarilla} from '../../../models/t_amarilla';
import {TarjetaAmarillaService} from '../../../services/t_amarilla.service';
import {Jugador} from '../../../models/jugador';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-t-amarilla-new',
  templateUrl: './t-amarilla-new.component.html',
  styleUrls: ['./t-amarilla-new.component.css'],
  providers:[TarjetaAmarillaService]
})
export class TAmarillaNewComponent implements OnInit {
  public tarjeta_amarilla:TarjetaAmarilla;
  public jugadores:Jugador;
  constructor(
    private _tarjetaAmarillaService:TarjetaAmarillaService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.tarjeta_amarilla=new TarjetaAmarilla(null,null,'',null);
  }

  ngOnInit() {
    this.datosjugadores();
  }
  onSubmit(){
    this._tarjetaAmarillaService.saveamarilla(this.tarjeta_amarilla).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/tamarillas']);
      },
      error=>{
        console.log(error);
      }
    );

  }
  datosjugadores(){
    this._tarjetaAmarillaService.getjugadores().subscribe(
      response=>{
        this.jugadores=response;
        console.log(this.jugadores);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
