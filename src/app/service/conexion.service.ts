import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DatosService } from '../service/datos.service';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  //apiDir: string = "https://helios-portfolio-backend.herokuapp.com/";
  apiDir: string = "http://localhost:8080/";



  constructor(private http: HttpClient, public datos: DatosService) { }

  getData(): Observable<any> {
    return this.http.get(this.apiDir + "info/1");
  }

  login(newLogin: any): Observable<any> {
    return this.http.post(this.apiDir + "login", newLogin);
  }

  guardarCambios(perso: any): Observable<any> {    
    return this.http.post(this.apiDir + "nuevo", perso, { headers: this.setearHeader() });
  }

  nuevaEdu(edu: any): Observable<any> {    
    return this.http.post(this.apiDir + "nuevo/educacion", edu, { headers: this.setearHeader() });
  }

  borrarEdu(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarEdu/" + id, { headers: this.setearHeader() });
  }

  nuevoProy(proy: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/proyecto", proy, { headers: this.setearHeader() });
  }

  borrarProy(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarProy/" + id, { headers: this.setearHeader() });
  }

  nuevaExp(proy: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/experiencia", proy, { headers: this.setearHeader() });
  }

  borrarExp(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarExp/" + id, { headers: this.setearHeader() });
  }

  setearHeader(){
    let tokenInMemory: any;
    tokenInMemory = localStorage.getItem("token");
    let token = JSON.parse(tokenInMemory).token;
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

}
