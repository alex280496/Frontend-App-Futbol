import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../../models/equipo';
import { EquipoService } from '../../../services/equipo.service';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { Global } from '../../../services/global';


@Component({
  selector: 'app-equipo-edit',
  templateUrl: './equipo-edit.component.html',
  styleUrls: ['./equipo-edit.component.css'],
  providers:[EquipoService]
})
export class EquipoEditComponent implements OnInit {
  public equipo:Equipo;
  public imagen:File=null;
  public imgequipo:string;
  constructor(
    private _equipoService:EquipoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.equipo=new Equipo(null,'','',null);
    this.imgequipo=Global.urlimgequipo;
  }
  cargandoImagen(files:FileList){
    this.imagen=files[0];
      //console.log(this.equipo);
    }

  ngOnInit() {
   this.getequipo();
  }
  
  onSubmit(){
    this._equipoService.updateequipo(this.equipo,this.equipo.id).subscribe(
      response=>{
        console.log(response);
        this._router.navigate(['/equipos']);
      },
      error=>{
        console.log(error);
      }
    );
    if(this.imagen!=null){
      console.log('noes nulo');
      this._equipoService.guardarimagenesupdate(this.imagen,this.equipo.id).subscribe(
        response=>{
          console.log(response);
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
  getequipo(){
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
