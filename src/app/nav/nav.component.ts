import { Component, OnInit } from '@angular/core';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login: string = "./assets/imagenes/Login-icon.png"
  logout: string = "./assets/imagenes/Logout-icon.png"

  constructor(public datos: DatosService) { }

  deslogear() {
    if (this.datos.login) {
      localStorage.clear();
      this.datos.login = false;
    }
  }

  ngOnInit(): void {
  }

}
