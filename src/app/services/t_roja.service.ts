import  {Injectable} from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
import  {Observable} from 'rxjs';
import  {Global} from './global';


@Injectable()
export class TarjetaRojaService{
    public url:string
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //metodos http
    getrojas():Observable<any>{
        return this._http.get(this.url +'trojas');
    }
    getroja(id):Observable<any>{
        return this._http.get(this.url + 'trojas/'+id);
    }
    getjugadores():Observable<any>{
        return this._http.get(this.url + 'jugadores');
    }
    savetrojas(tarjeta_roja):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.post(this.url +'trojas',tarjeta_roja,{headers:headers});
    }
    updaterojas(tarjeta_roja,id):Observable<any>{
        let headers=new HttpHeaders({'Content-Type':'application/json'});
        return this._http.put(this.url + 'trojas/'+id,tarjeta_roja,{headers:headers})
    }
    deletetarjeta(id):Observable<any>{
        return this._http.delete(this.url + 'trojas/'+id);
    }
}