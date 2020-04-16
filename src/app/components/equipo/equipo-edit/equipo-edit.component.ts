import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../../models/equipo';
import { EquipoService } from '../../../services/equipo.service';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { ENGINE_METHOD_DIGESTS } from 'constants';
@Component({
  selector: 'app-equipo-edit',
  templateUrl: './equipo-edit.component.html',
  styleUrls: ['./equipo-edit.component.css'],
  providers:[EquipoService]
})
export class EquipoEditComponent implements OnInit {
  public equipo:Equipo;
  public imagen:File;
  constructor(
    private _equipoService:EquipoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.equipo=new Equipo('','',null);
  }
  cargandoImagen(files:FileList){
    this.imagen=files[0];
      console.log(this.equipo);
    }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        let id=params['id'];
        this._equipoService.getequipo(id).subscribe(
          response=>{
            this.equipo=response;
            console.log(this.equipo);
          },
          error=>{
            console.log(error);
          }
        );
      }
    );

  }

}
