import { Component, OnInit } from '@angular/core';
import { DatosService } from './service/datos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'portfolio-ang';

  constructor(public datos: DatosService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") != null) {
      this.datos.login = true;
    }
  }

}
