import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @ViewChild("dato") dato: ElementRef;

  personaId = { id : ""};

  constructor(public datos: DatosService, public conServ: ConexionService) { }

  guardar() {    
    this.datos.datos.nombre = this.dato.nativeElement.textContent;
    this.conServ.guardarCambios(this.datos.datos).subscribe(data => {
      alert("Sus datos fueron guardados en la base de datos");
    })
  }

  ngOnInit(


  ): void {

  }



}
