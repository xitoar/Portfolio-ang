import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  dataServ: any;

  constructor(public datos: DatosService) { }

  ngOnInit(): void {
    this.dataServ = this.datos.get();
  }

}
