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
  nuevaImg: boolean = false;
  personaId = { id : ""};

  constructor(public conServ: ConexionService, public datos: DatosService) { }

  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0];
    this.reader.readAsDataURL(archivoCapturado);
    this.reader.onloadend = () => {
      this.archivo = this.reader.result;
      this.datos.datos.imagen = this.reader.result;
      this.nuevaImg = true;
    }
  }
  guardar() {
    if (this.nuevaImg) {
      this.personaId.id = this.datos.datos.id;
      this.datos.datos.educacion.persona = this.personaId;
      this.datos.datos.experiencia.persona = this.personaId;
      this.datos.datos.proyectos.persona = this.personaId;
      this.conServ.guardarCambios(this.datos.datos).subscribe(data => {
        alert("Sus datos fueron guardados en la base de datos");
      })
    } else {
      alert("No cargo foto nueva");
    }
  }

  ngOnInit(): void {
    this.conServ.getData().subscribe(data => {
      this.datos.datos = data;
      this.archivo = data.imagen;
      const personaId = { id: "" };
      personaId.id = data.id
      for (let edu of this.datos.datos.educacion) {
        edu.persona = personaId;
      }
      for (let exp of this.datos.datos.experiencia) {
        exp.persona = personaId;
      }for (let proy of this.datos.datos.proyectos) {
        proy.persona = personaId;
      }
    });
  }

}
