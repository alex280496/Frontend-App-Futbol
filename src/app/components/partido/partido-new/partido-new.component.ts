import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {PartidoFutbol} from '../../../models/partido_futbol';
import {PartidoFutbolService} from '../../../services/partido_futbol.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-partido-new',
  templateUrl: './partido-new.component.html',
  styleUrls: ['./partido-new.component.css'],
  providers:[PartidoFutbolService]
})
export class PartidoNewComponent implements OnInit {

  public partido:PartidoFutbol;
  public equipos:Equipo;
  constructor(
    private _partidoService:PartidoFutbolService,
    private _router:Router
  ) { 
    this.partido=new PartidoFutbol(null,null,null,null);
  }

  ngOnInit() {
    console.log(this.partido);
    this._partidoService.getequipos().subscribe(
      response=>{
        this.equipos=response;
        console.log(this.equipos);
      },
      error=>{
        console.log(error);
      }
    );
  }
  onSubmit(){
    this._partidoService.savepartido(this.partido).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/partidos']);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
