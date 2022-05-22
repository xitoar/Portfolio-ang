import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @ViewChildren("dato1") dato1: QueryList<ElementRef>;

  @ViewChildren("dato3") dato3: QueryList<ElementRef>;

  personaId = { id: "" };
  exp = { id: "", tarea: "Ingrese nuevo tarea", comentario: "Ingrese comentarios adicionales", persona: {} };


  constructor(public datos: DatosService, public conServ: ConexionService) { }

  nuevo() {
    this.personaId.id = this.datos.datos.id;
    this.exp.persona = this.personaId;
    this.conServ.nuevaExp(this.exp).subscribe(data => {
      this.datos.datos.experiencia = data;
    });
  }

  guardar(item: any) {
    this.personaId.id = this.datos.datos.id;
    this.datos.datos.experiencia[item].persona = this.personaId;
    this.datos.datos.experiencia[item].tarea = this.dato1.get(item)?.nativeElement.textContent;
    this.datos.datos.experiencia[item].comentario = this.dato3.get(item)?.nativeElement.textContent;
    this.conServ.nuevaExp(this.datos.datos.experiencia[item]).subscribe(data => {
      this.datos.datos.experiencia = data;
      alert("Sus datos fueron guardados en la base de datos");
    });
  }

  borrar(item: any) {
    this.conServ.borrarExp(this.datos.datos.experiencia[item].id).subscribe(data => {
      this.datos.datos.experiencia = data;
    });
  }

  ngOnInit(): void {
  }

}
