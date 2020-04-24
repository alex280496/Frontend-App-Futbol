import { Component, OnInit } from '@angular/core';
import {TarjetaAmarilla} from '../../../models/t_amarilla';
import {TarjetaAmarillaService} from '../../../services/t_amarilla.service';

@Component({
  selector: 'app-t-amarillas',
  templateUrl: './t-amarillas.component.html',
  styleUrls: ['./t-amarillas.component.css'],
  providers:[TarjetaAmarillaService]
})
export class TAmarillasComponent implements OnInit {
  public tarjeta_amarilla:TarjetaAmarilla
  constructor(
    private _tarjetaService:TarjetaAmarillaService
  ) { }

  ngOnInit() {
    this._tarjetaService.getamarillas().subscribe(
      response=>{
        this.tarjeta_amarilla=response;
        console.log(this.tarjeta_amarilla);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
