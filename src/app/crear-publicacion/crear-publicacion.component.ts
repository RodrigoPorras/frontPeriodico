import { PublicacionComponent } from 'app/publicacion/publicacion.component';
import { Routes } from '@angular/router';
import { element } from 'protractor';
import { OK } from './../model/httpstatus';
import { CrearPublicacionService } from './crear-publicacion.service';
import { publicacionModel } from './../model/publicacion.model';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css'],
  providers: [CrearPublicacionService]
})
export class CrearPublicacionComponent implements OnInit {
  private publicacion:publicacionModel ;
  private isValid : boolean = true;
  private message: string = "";

  constructor(private crearPublicacionService : CrearPublicacionService, 
    private router:Router) { 
    this.publicacion = new publicacionModel();
  }

  ngOnInit() {
  }
  public saveOrUpdate():void{
    this.isValid = this.crearPublicacionService.validate(this.publicacion);
    
    if(this.isValid){
      this.crearPublicacionService.saveOrUpdate(this.publicacion).subscribe(res => {
          if(res.responseCode == OK){
            this.router.navigate(['/publicacionComponent'])
          }else{
            this.message = res.message;
            this.isValid = false;
          }
      });
    }else{
      this.message = "Los campos con * son obligatorios";
    }
  }
}
