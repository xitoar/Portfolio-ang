import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @ViewChild ("dato1") dato1: ElementRef;
  @ViewChild ("dato2") dato2: ElementRef;
  @ViewChild ("dato3") dato3: ElementRef;  
  
  constructor(public datos: DatosService, public conServ: ConexionService) { }

  guardar(){ 
        
    this.datos.datos.mail = this.dato1.nativeElement.textContent;
    this.datos.datos.facebook = this.dato2.nativeElement.textContent;
    this.datos.datos.linkedin = this.dato3.nativeElement.textContent;
    this.conServ.guardarCambios(this.datos.datos).subscribe(data => {
      alert("Sus datos fueron guardados en la base de datos");     
    })   
   
  }

  ngOnInit(): void {
  }

}
