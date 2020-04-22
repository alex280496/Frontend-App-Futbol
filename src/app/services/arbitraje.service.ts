import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Arbitraje } from '../models/arbitraje';
import { Observable } from 'rxjs';
import { Global } from './global';
@Injectable()
export class ArbitrajeService {
    public url: string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }
    //metodos http

    getarbitrajes(): Observable<any> {
        return this._http.get(this.url + 'arbitrajes');
    }
    getjugadores(): Observable<any> {
        return this._http.get(this.url + 'jugadores');
    }
    savejugador(arbitraje):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'})
        return this._http.post(this.url+'arbitrajes',arbitraje,{headers:headers});
    }
}