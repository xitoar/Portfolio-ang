import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DatosService } from '../service/datos.service';
import { ConexionService } from '../service/conexion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @ViewChildren("dato1") dato1: QueryList<ElementRef>;
  @ViewChildren("dato2") dato2: QueryList<ElementRef>;
  @ViewChildren("dato3") dato3: QueryList<ElementRef>;
  
  persona = { id : ""};
  edu = { id: "", titulo: "", subtitulo: "", comentario: "", persona: {} };

  constructor(public datos: DatosService, public conServ: ConexionService) { }

  guardar(item: any) {
    this.datos.datos.educacion[item].titulo = this.dato1.get(item)?.nativeElement.textContent;
    this.datos.datos.educacion[item].subtitulo = this.dato2.get(item)?.nativeElement.textContent;
    this.datos.datos.educacion[item].comentario = this.dato3.get(item)?.nativeElement.textContent;
    this.persona.id = this.datos.datos.id;
    this.datos.datos.educacion[item].persona = this.persona;  
    this.conServ.nuevaEdu(this.datos.datos.educacion[item]).subscribe(data => {
      this.datos.datos.educacion = data;      
    });
  }

  nuevo() {   
    this.persona.id = this.datos.datos.id;
    this.conServ.nuevaEdu(this.edu).subscribe(data => {
      this.datos.datos.educacion = data;
      console.log(data);
    });
  }

  ngOnInit(): void { }

}
