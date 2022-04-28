import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  uri = "http://localhost:8080/";
  

  constructor(private http: HttpClient) { }

  login(newLogin: any): Observable<any>{
    return this.http.post(this.uri+"login", newLogin)
  }

  /*getData(): Observable<any>{
     return this.http.get(this.uri);     
  }

  putData(newPers: any): Observable<any>{
    console.log(newPers);
    return this.http.post(this.uri, newPers);
    
  }
  
  borrar(id: string){
    console.log("Borrando");
    return this.http.delete(this.uri+id);
  }
  buscar(id: string): Observable<any>{ 
    console.log("buscando");   
    return this.http.get(this.uri+id);
  }*/
}