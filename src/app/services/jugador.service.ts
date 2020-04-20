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
    getequipos():Observable<any>{
        return this._http.get(this.url+'equipos');
    }
    savejugador(jugador):Observable<any>{
        let headers=new HttpHeaders({'Content-type':'application/json'});
        return this._http.post(this.url+'jugadores',jugador,{headers:headers});
    }
    guardarimagen(Fileimagen:File,id){
        const formData=new FormData();
        formData.append('imagen',Fileimagen);
        return this._http.post(this.url+'guardarimagenjugador/'+id,formData)
    }
    getjugador(id):Observable<any>{
        return this._http.get(this.url+'jugadores/'+id);
    }
}