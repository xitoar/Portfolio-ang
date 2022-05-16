
import { Component, OnInit, ElementRef } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-boton-guardar',
  templateUrl: './boton-guardar.component.html',
  styleUrls: ['./boton-guardar.component.css']
})
export class BotonGuardarComponent implements OnInit { 
  
  dato: any; 

  constructor(public datos : DatosService) { }
  
  guardar(dato: any){
    
    
  }

  ngOnInit(): void {
  }

}
