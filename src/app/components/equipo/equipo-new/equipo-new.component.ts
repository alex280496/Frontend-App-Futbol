import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {EquipoService} from '../../../services/equipo.service';
@Component({
  selector: 'app-equipo-new',
  templateUrl: './equipo-new.component.html',
  styleUrls: ['./equipo-new.component.css'],
  providers:[EquipoService]
})
export class EquipoNewComponent implements OnInit {
  public equipo:Equipo;
  public imagen:File;
  constructor(
    private _equipoService:EquipoService
  ) { 
    this.equipo=new Equipo('','',null);
    
  }
  cargandoImagen(files:FileList){
  this.imagen=files[0];
    console.log(this.equipo);
  }
  ngOnInit() {
  }
  onSubmit(){
    this._equipoService.saveequipos(this.equipo).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
    this._equipoService.guardarimagenes(this.imagen).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
