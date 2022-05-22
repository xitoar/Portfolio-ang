import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @ViewChildren("dato1") dato1: QueryList<ElementRef>;
  
  @ViewChildren("dato3") dato3: QueryList<ElementRef>;

  personaId = { id : ""};
  proy = { id: "", titulo: "Ingrese nuevo titulo", subtitulo: "Ingrese nombre institución", comentario: "Ingrese comentarios adicionales", persona: {} };

  constructor(public datos: DatosService, public conServ: ConexionService) { }

  nuevo() {   
    this.personaId.id = this.datos.datos.id;
    this.proy.persona = this.personaId;
    this.conServ.nuevoProy(this.proy).subscribe(data => {
      this.datos.datos.proyectos = data;      
    });    
  }

  guardar(item: any) {
    this.personaId.id = this.datos.datos.id;
    this.datos.datos.proyectos[item].persona = this.personaId;
    this.datos.datos.proyectos[item].titulo = this.dato1.get(item)?.nativeElement.textContent;    
    this.datos.datos.proyectos[item].comentario = this.dato3.get(item)?.nativeElement.textContent;     
    this.conServ.nuevoProy(this.datos.datos.proyectos[item]).subscribe(data => {
      this.datos.datos.proyectos = data;
      alert("Sus datos fueron guardados en la base de datos");      
    });
  } 

  borrar(item: any){
    this.conServ.borrarProy(this.datos.datos.proyectos[item].id).subscribe(data => {
      this.datos.datos.proyectos = data;
    });
  }

  ngOnInit(): void {
  }

}
