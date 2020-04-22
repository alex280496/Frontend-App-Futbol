import { Component, OnInit } from '@angular/core';
import {Arbitraje} from '../../../models/arbitraje';
import {ArbitrajeService} from '../../../services/arbitraje.service';
import {Jugador} from '../../../models/jugador';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-arbitraje-new',
  templateUrl: './arbitraje-new.component.html',
  styleUrls: ['./arbitraje-new.component.css'],
  providers:[ArbitrajeService]
})
export class ArbitrajeNewComponent implements OnInit {
  public arbitraje:Arbitraje;
  public jugadores:Jugador;
  constructor(
    private _arbitrajeService:ArbitrajeService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.arbitraje=new Arbitraje(null,null,null,null);
  }

  ngOnInit() {
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
    this._arbitrajeService.savejugador(this.arbitraje).subscribe(
      response=>{
        this.arbitraje=response;
        console.log(this.arbitraje);
        this._router.navigate(['/arbitrajes']);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
