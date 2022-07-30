import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InfoComponent } from './info/info.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { BlandasComponent } from './blandas/blandas.component';

const routes: Routes = [
    {path: '', redirectTo: '/info', pathMatch: 'full'},
    {path: 'info', component:InfoComponent},
    {path: 'educacion', component:EducacionComponent},
    {path: 'experiencia', component:ExperienciaComponent},
    {path: 'proyectos', component:ProyectosComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'login', component:LoginComponent},
    {path: 'blandas', component:BlandasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
