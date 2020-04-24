import { Component, OnInit } from '@angular/core';
import {Arbitraje} from '../../../models/arbitraje';
import {ArbitrajeService} from '../../../services/arbitraje.service';
import {Jugador}from '../../../models/jugador';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-arbitraje-edit',
  templateUrl: './arbitraje-edit.component.html',
  styleUrls: ['./arbitraje-edit.component.css'],
  providers:[ArbitrajeService]
})
export class ArbitrajeEditComponent implements OnInit {
  public arbitraje:Arbitraje;
  public jugadores:Jugador;
  public aux:number;
  constructor(
    private _arbitrajeService:ArbitrajeService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.arbitraje=new Arbitraje(null,null,null,null,null);
   }

  ngOnInit() {
    this.llenardatos();
    this._arbitrajeService.getjugadores().subscribe(
      response=>{
        this.jugadores=response;
        console.log(this.jugadores);
      },
      error=>{
        console.log(error);
      }
    );
  }
  onSubmit(){
    if(this.arbitraje.jugador_id ==null){
      this.arbitraje.jugador_id=this.aux;
    }
    this._arbitrajeService.updatearbitraje(this.arbitraje,this.arbitraje.id_arbitraje).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/arbitrajes']);
      },
      error=>{
        console.log(error);
      }
    );

  }
  llenardatos(){
    this._route.params.subscribe(
      params=>{
        let id= params['id'];
        this._arbitrajeService.datosarbitraje(id).subscribe(
          response=>{
            this.arbitraje=response[0];
            console.log(this.arbitraje);
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
