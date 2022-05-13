import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
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
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  logear() {
    if (this.form.valid) {
      this.conServ.login(this.form.value).subscribe(data => {        
        this.datos.login = data;    
        if (data == true) {
          this.router.navigate(['/info']);
        } else {
          alert("Datos cargados erroneos")
        }
      });
    } else {
      alert("Datos cargados incompletos")
    }
  }
  
  ngOnInit(): void { }

}