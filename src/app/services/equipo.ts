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
}