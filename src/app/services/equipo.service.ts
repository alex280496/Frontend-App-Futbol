import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipo} from '../models/equipo';
import {Global} from './global';

@Injectable()
export class EquipoService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }

    //metodos hdttp
    getequipos():Observable<any>{
     return this._http.get(this.url+'equipos');
    }
    
    saveequipos(equipo):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.post(this.url+'equipos',equipo,{headers:headers});
    }
    guardarimagenes(fileimagen:File,id){
        const formData =new FormData();
        formData.append('imagen',fileimagen);
        return this._http.post(this.url+'guardarimagen/'+id,formData);
      }
    guardarimagenesupdate(fileimagen:File,id){
        const formData =new FormData();
        formData.append('imagen',fileimagen);
        return this._http.post(this.url+'guardarimagenupdate/'+id,formData);
      }
    getequipo(id):Observable<any>{
        return this._http.get(this.url+'equipos/'+id);
    }
    updateequipo(equipo,id):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.put(this.url + 'equipos/'+id,equipo,{headers:headers});
    }
    deleteequipo(id):Observable<any>{
        return this._http.delete(this.url +'equipos/'+id)
    }
}