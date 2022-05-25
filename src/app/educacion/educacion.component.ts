import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DatosService } from '../service/datos.service';
import { ConexionService } from '../service/conexion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  archivo: any = "./assets/imagenes/escudo.jpg";
  reader = new FileReader;
  nuevaImg: boolean = false;

  @ViewChildren("dato1") dato1: QueryList<ElementRef>;
  @ViewChildren("dato2") dato2: QueryList<ElementRef>;
  @ViewChildren("dato3") dato3: QueryList<ElementRef>;
  
  personaId = { id : ""};
  edu = { id: "", titulo: "Ingrese nuevo titulo", subtitulo: "Ingrese nombre institución", comentario: "Ingrese comentarios adicionales", persona: {} };
 

  constructor(public datos: DatosService, public conServ: ConexionService) { }
  
  nuevo() {   
    this.personaId.id = this.datos.datos.id;
    this.edu.persona = this.personaId;
    this.conServ.nuevaEdu(this.edu).subscribe(data => {
      this.datos.datos.educacion = data;      
    });
  }

  guardar(item: any) {    
    this.datos.datos.educacion[item].titulo = this.dato1.get(item)?.nativeElement.textContent;
    this.datos.datos.educacion[item].subtitulo = this.dato2.get(item)?.nativeElement.textContent;
    this.datos.datos.educacion[item].comentario = this.dato3.get(item)?.nativeElement.textContent;     
    this.conServ.nuevaEdu(this.datos.datos.educacion[item]).subscribe(data => {
      this.datos.datos.educacion = data;
      alert("Los datos de Educacion "+this.datos.datos.educacion[item].titulo+" fueron guardados");      
    });
  } 

  borrar(item: any){
    this.conServ.borrarEdu(this.datos.datos.educacion[item].id).subscribe(data => {
      this.datos.datos.educacion = data;
    });
  }

  capturarFile(event: any, item: any){
    const archivoCapturado = event.target.files[0];
    this.reader.readAsDataURL(archivoCapturado);
    this.reader.onloadend = () => {      
      this.datos.datos.educacion[item].imagen = this.reader.result;      
      this.nuevaImg = true;      
    }    
  }    

  ngOnInit(): void { }

}
