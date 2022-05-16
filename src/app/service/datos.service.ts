import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: any = null;

  login: boolean = true;

  constructor() {}

}
