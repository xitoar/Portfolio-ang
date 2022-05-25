import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DatosService {   

  datos: any;
  login: boolean = true;

  constructor() {}

}
