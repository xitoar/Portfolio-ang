import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  apiDir: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiDir + "info/2");
  }

  login(newLogin: any): Observable<any> {
    return this.http.post(this.apiDir + "login", newLogin);
  }

  guardarCambios(perso: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo", perso);
  }

  nuevaEdu(edu: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/educacion", edu);
  }

  borrarEdu(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarEdu/" + id);
  }  

  nuevoProy(proy: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/proyecto", proy);
  }

  borrarProy(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarProy/" + id);
  }

  nuevaExp(proy: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/experiencia", proy);
  }

  borrarExp(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarExp/" + id);
  }

}
