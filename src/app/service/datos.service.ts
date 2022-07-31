import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DatosService {   

  datos: any;
  login: boolean = false;  

  constructor() {}

  loginSet(dato: boolean){
    this.login = dato;
  }

}
