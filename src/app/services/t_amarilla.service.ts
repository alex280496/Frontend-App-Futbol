import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

@Injectable()
export class TarjetaAmarillaService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //metodos http
    getamarillas():Observable<any>{
        return this._http.get(this.url + 'tamarillas');
    }
    getamarilla(id):Observable<any>{
        return  this._http.get(this.url + 'tamarillas/'+id);
    }
    saveamarilla(amarilla):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.post(this.url +'tamarilas',amarilla,{headers:headers});
    }
    updateamarilla(amarilla,id):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.put(this.url +'tamarillas/'+id,amarilla,{headers:headers});
    }
    deleteamarilla(id){
        return this._http.delete(this.url + 'tamarillas/'+id);
    }

}