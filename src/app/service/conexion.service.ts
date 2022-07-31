import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { DatosService } from '../service/datos.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  apiDir: string = "https://helioshorfoliohackend.herokuapp.com/";
  //apiDir: string = "http://localhost:8080/";
  

  constructor(private http: HttpClient, private datos: DatosService, private router: Router) { }

  getData(): Observable<any> {
    return this.http.get(this.apiDir + "info/1");
  }

  login(newLogin: any): Observable<any> {
    return this.http.post(this.apiDir + "login", newLogin)
      .pipe(
        catchError(this.errorHandlerLogin)
      );
  }

  guardarCambios(perso: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo", perso, { headers: this.setearHeader() })
      .pipe(
        catchError(this.errorHandlerToken)
      );

  }

  nuevaEdu(edu: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/educacion", edu, { headers: this.setearHeader() })
      .pipe(
        catchError(this.errorHandlerToken)
      )
  }

  borrarEdu(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarEdu/" + id, { headers: this.setearHeader() })
      .pipe(
        catchError(this.errorHandlerToken)
      )

  }

  nuevoProy(proy: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/proyecto", proy, { headers: this.setearHeader() })
      .pipe(
        catchError(this.errorHandlerToken)
      )
  }

  borrarProy(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarProy/" + id, { headers: this.setearHeader() })
      .pipe(
        catchError( this.errorHandlerToken)
      )
  }

  nuevaExp(proy: any): Observable<any> {
    return this.http.post(this.apiDir + "nuevo/experiencia", proy, { headers: this.setearHeader() })
      .pipe(
        catchError(this.errorHandlerToken)
      )
  }

  borrarExp(id: any): Observable<any> {
    return this.http.delete(this.apiDir + "borrarExp/" + id, { headers: this.setearHeader() })
      .pipe(
        catchError(this.errorHandlerToken)
      )
  }

  setearHeader() {
    let tokenInMemory: any;
    tokenInMemory = localStorage.getItem("token");
    let token = JSON.parse(tokenInMemory).token;
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  errorHandlerLogin(error: HttpErrorResponse) {
    if (error.status == 401 || 403) {
      alert("Datos Ingresados Erroneos");      
      return throwError(() => new Error("Datos Ingresados Erroneos"));
    } else {
      return throwError(() => new Error(error.message));
    }
  }

  errorHandlerToken(error: HttpErrorResponse) {
    if (error.status == 401 || 403) {   
      alert("Su sesión a expirado, desloguee y loguee nuevamente");     
      return throwError(() => new Error("Su sesión a expirado, desloguee y loguee nuevamente"));
    } else {
      return throwError(() => new Error(error.message));
    }
  }

}
