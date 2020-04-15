import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {EquipoService} from '../../../services/equipo';
@Component({
  selector: 'app-equipo-new',
  templateUrl: './equipo-new.component.html',
  styleUrls: ['./equipo-new.component.css'],
  providers:[EquipoService]
})
export class EquipoNewComponent implements OnInit {
  public equipo:Equipo;
  constructor(
    private _equipoService:EquipoService
  ) { 
    this.equipo=new Equipo('','',null);
    console.log(this.equipo);
  }
  cargandoImagen(files:FileList){
  this.equipo.imagen=files[0];

  }
  ngOnInit() {
  }
  onSubmit(){
    this._equipoService.saveequipos(this.equipo).subscribe(
      response=>{
        console.log(response);
        alert('equipo guardado exitosamente');
      },
      error=>{
        console.log(error);
      }
    );
  }

}
