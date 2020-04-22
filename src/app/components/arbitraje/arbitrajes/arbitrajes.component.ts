import { Component, OnInit } from '@angular/core';
import {Arbitraje} from '../../../models/arbitraje';
import {ArbitrajeService} from '../../../services/arbitraje.service';
@Component({
  selector: 'app-arbitrajes',
  templateUrl: './arbitrajes.component.html',
  styleUrls: ['./arbitrajes.component.css'],
  providers:[ArbitrajeService]
})
export class ArbitrajesComponent implements OnInit {
  public arbitrajes:Arbitraje;
  constructor(
    private _arbitrajeService:ArbitrajeService
  ) { }

  ngOnInit() {
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
