import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../../models/equipo';
import {EquipoService} from '../../../services/equipo.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-equipo-new',
  templateUrl: './equipo-new.component.html',
  styleUrls: ['./equipo-new.component.css'],
  providers:[EquipoService]
})
export class EquipoNewComponent implements OnInit {
  public equipo:Equipo;
  public imagen:File;
  public valida:string=null;
  constructor(
    private _equipoService:EquipoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.equipo=new Equipo(null,'','',null);
    
  }
  cargandoImagen(files:FileList){
  this.imagen=files[0];
    //console.log(this.equipo);
  }
  ngOnInit() {
  }
  onSubmit(){
    this._equipoService.saveequipos(this.equipo).subscribe(
      response=>{
        this.equipo=response;
        console.log(this.equipo);
        this.guardarimagen(this.equipo.id_equipo);
        console.log(this.equipo.id_equipo);
      },
      error=>{
        console.log(error);
      }
    );
     
  }
  guardarimagen(id){
    this._equipoService.guardarimagenes(this.imagen,this.equipo.id_equipo).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/equipos']);
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  

}
