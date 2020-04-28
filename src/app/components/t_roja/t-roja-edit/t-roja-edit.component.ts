import { Component, OnInit } from '@angular/core';
import { Jugador} from '../../../models/jugador';
import {TarjetaRoja} from '../../../models/t_roja';
import {TarjetaRojaService } from '../../../services/t_roja.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-t-roja-edit',
  templateUrl: './t-roja-edit.component.html',
  styleUrls: ['./t-roja-edit.component.css'],
  providers:[TarjetaRojaService]
})
export class TRojaEditComponent implements OnInit {
  private tarjeta_roja:TarjetaRoja;
  private jugadores:Jugador;
  public aux:number;
  constructor(
    private _tarjetaRojaService:TarjetaRojaService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.tarjeta_roja=new TarjetaRoja(null,null,null,null);
  }

  ngOnInit() {
    this.datosjugadores();
    this.route.params.subscribe(
      params=>{
        let id =params ['id'];
        this._tarjetaRojaService.getroja(id).subscribe(
          response=>{
            this.tarjeta_roja=response[0]; //response[0] porque me devuleve un array y el binding bidireccional
            //del formualrio solo acepta objetos por eso tomo el array en la posicion 0 osea el objeto
            console.log(this.tarjeta_roja);
            this.aux=response[0].id;
          },
          error=>{
            console.log(error);
          }

        );
      }
    );
  }
  onSubmit(){
    if(this.tarjeta_roja.jugador_id==null){
      this.tarjeta_roja.jugador_id=this.aux;
    }
    this._tarjetaRojaService.updaterojas(this.tarjeta_roja,this.tarjeta_roja.id_tr).subscribe(
      response=>{
        console.log(response);
        this.router.navigate(['/trojas']);
      },
      error=>{
        console.log(error);
      }
    );
  }
  datosjugadores(){
    this._tarjetaRojaService.getjugadores().subscribe(
      response=>{
        this.jugadores=response;
      },error=>{
        console.log(error);
      }
    );
  }

}
