import { Injectable } from '@angular/core';
import { createFalse } from 'typescript';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: any;

  login: boolean = false;

  constructor() { }

  set(datos: any){
    this.datos = datos;
  }

  get(){
    return this.datos;
  }

}
