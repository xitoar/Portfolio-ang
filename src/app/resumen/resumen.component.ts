import { Component, OnInit, Output } from '@angular/core';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  
  archivo: any = "./assets/imagenes/foto_gris.png";
  reader = new FileReader;

  constructor(public conServ: ConexionService, public datos: DatosService) { }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0];
    this.reader.readAsDataURL(archivoCapturado);
    this.reader.onloadend = () => {
      this.archivo = this.reader.result;
      this.datos.datos.imagen = this.reader.result;
      console.log(this.datos.datos);
    }    
  }

  ngOnInit(): void {
    this.conServ.getData().subscribe(data => {      
      this.datos.datos = data;
      this.archivo = data.imagen;      
    });    
  }

}
