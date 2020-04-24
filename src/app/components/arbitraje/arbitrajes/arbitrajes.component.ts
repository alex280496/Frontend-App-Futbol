import { Component, OnInit } from '@angular/core';
import {Arbitraje} from '../../../models/arbitraje';
import {ArbitrajeService} from '../../../services/arbitraje.service';
import{Router,ActivatedRoute, Params}from '@angular/router';
@Component({
  selector: 'app-arbitrajes',
  templateUrl: './arbitrajes.component.html',
  styleUrls: ['./arbitrajes.component.css'],
  providers:[ArbitrajeService]
})
export class ArbitrajesComponent implements OnInit {
  public arbitrajes:Arbitraje;
  constructor(
    private _arbitrajeService:ArbitrajeService,
    private _router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.datosarbitrajes();
  }
  delete(id){
    this._arbitrajeService.deletearbitraje(id).subscribe(
      respose=>{
        console.log(respose);
       this.datosarbitrajes();
      },
      error=>{
        console.log(error);
      }
    );
  }
   datosarbitrajes(){
    this._arbitrajeService.getarbitrajes().subscribe(
      response=>{
        this.arbitrajes=response;
        console.log(this.arbitrajes);
      },error=>{
        console.log(error);
      }
    );
   }

}
