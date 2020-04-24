import { Component, OnInit } from '@angular/core';
import {TarjetaAmarilla} from '../../../models/t_amarilla';
import {TarjetaAmarillaService} from '../../../services/t_amarilla.service';
import {Jugador} from '../../../models/jugador';
import {Router, ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-t-amarilla-edit',
  templateUrl: './t-amarilla-edit.component.html',
  styleUrls: ['./t-amarilla-edit.component.css'],
  providers:[TarjetaAmarillaService]
})
export class TAmarillaEditComponent implements OnInit {

  public tarjeta_amarilla:TarjetaAmarilla;
  public jugadores:Jugador;
  public aux:number;
  constructor(
    private _tarjetaAmarillaService:TarjetaAmarillaService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.tarjeta_amarilla=new TarjetaAmarilla(null,null,null,null);
  }

  ngOnInit() {
    this.datosjugadores();
    this.llenardatos();
    
  }
  onSubmit(){
    if (this.tarjeta_amarilla.jugador_id==null){
      this.tarjeta_amarilla.jugador_id=this.aux;
    }
    this._tarjetaAmarillaService.updateamarilla(this.tarjeta_amarilla,this.tarjeta_amarilla.id_ta).subscribe(
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
  llenardatos(){
    this._route.params.subscribe(
      params=>{
        //tood
        let id= params['id'];
        this._tarjetaAmarillaService.getamarilla(id).subscribe(
          response=>{
            this.tarjeta_amarilla=response[0];
            console.log(this.tarjeta_amarilla);
            this.aux=response[0].id;
          },
          error=>{
            console.log(error);
          }
        );
      }
    );

  }

}
