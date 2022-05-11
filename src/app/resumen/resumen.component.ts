import { Component, OnInit, Output } from '@angular/core';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
 

  constructor(public conServ: ConexionService, public datos: DatosService) { }

  ngOnInit(): void {
    this.conServ.getData().subscribe(data => {      
      this.datos.set(data);      
    });
  }

}
