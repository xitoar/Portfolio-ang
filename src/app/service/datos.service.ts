import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: any;

  constructor() { }

  set(datos: any){
    this.datos = datos;
  }

  get(){
    return this.datos;
  }

}
