import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Global} from './global';
import {Jugador} from '../models/jugador';
@Injectable()

export class JugadorService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //metodos http
    getjugadores():Observable<any>{
        return this._http.get(this.url+'jugadores');
    }
    savejugador(jugador):Observable<any>{
        let headers=new HttpHeaders('Content-type:application/json');
        return this._http.post(this.url+'jugador',jugador,{headers:headers});
    }
}