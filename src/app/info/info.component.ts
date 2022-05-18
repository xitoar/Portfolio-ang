import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  @ViewChild ("dato") dato: ElementRef;  

  constructor(public datos: DatosService) { } 

  guardar(){    
    this.datos.datos.nombre = this.dato.nativeElement.textContent;    
  }

  ngOnInit(
    

  ): void {
    
  }

  

}
