
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from '../service/conexion.service';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private conServ: ConexionService, public datos: DatosService) {

    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  logear() {
    if (this.form.valid) {
      this.conServ.login(this.form.value).subscribe(data => {        
        this.datos.login = true;
        localStorage.setItem("token", JSON.stringify(data));
        this.router.navigate(['/info']);
      });
    } else {
      alert("Datos cargados incompletos")
    }
  }

  ngOnInit(): void { }

} 