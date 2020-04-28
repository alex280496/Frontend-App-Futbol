import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global } from './global';

@Injectable()
export class PartidoFutbolService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url
    }
    //metodos http
    getpartidos():Observable<any>{
        return this._http.get(this.url +'partidos');
    }
    getpartido(id):Observable<any>{
        return this._http.get(this.url +'partidos/'+id);
    }
    getequipos():Observable<any>{
        return this._http.get(this.url+'equipos');
    }
    savepartido(partido):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.post(this.url + 'partidos',partido,{headers:headers})
    }
    updatepartido(partido,id):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.put(this.url + 'partidos/'+id,partido,{headers:headers})
    }
    deletepartido(id):Observable<any>{
        return this._http.delete(this.url + 'partidos/'+id);
    }
}
