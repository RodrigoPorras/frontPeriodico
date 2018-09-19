import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PublicacionService } from 'app/publicacion/publicacion.service';
import { publicacionModel } from 'app/model/publicacion.model';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
  providers:[PublicacionService]
})
export class PublicacionComponent implements OnInit {
  private publicaciones : Array<publicacionModel>;

  constructor(private publicacionService : PublicacionService, private router : Router) { }

  ngOnInit() {
    this.LoadPublicaciones();
  }

  private LoadPublicaciones (): void{
    this.publicacionService.getPublicaciones().subscribe(res => {
      this.publicaciones = res;
    });
  }

  public edit(publicacion : publicacionModel):void{
    sessionStorage.setItem('publicacion',JSON.stringify(publicacion));
    this.router.navigate(['/crearPublicacionComponent']);
  }
  public delete(publicacion : publicacionModel):void{
    this.publicacionService.deletePublicacion (publicacion);
  }

}
