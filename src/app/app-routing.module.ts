import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { PublicacionComponent } from 'app/publicacion/publicacion.component';
import { CrearPublicacionComponent } from 'app/crear-publicacion/crear-publicacion.component';

const routes: Routes =[
    { path: '',redirectTo: '/publicacionComponent',pathMatch: 'full'},
    { path: 'appComponent',component: AppComponent},
    { path: 'publicacionComponent',component: PublicacionComponent},
    { path: 'crearPublicacionComponent',component: CrearPublicacionComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
