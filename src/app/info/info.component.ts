import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {  

  constructor(public datos: DatosService) { }

  ngOnInit(): void {}

  

}
