import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ResumenComponent } from './resumen/resumen.component';
import { MenuComponent } from './menu/menu.component';
import { EducacionComponent } from './educacion/educacion.component';
import { InfoComponent } from './info/info.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResumenComponent,
    MenuComponent,
    EducacionComponent,
    InfoComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
