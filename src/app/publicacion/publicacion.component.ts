import { Component, OnInit } from '@angular/core';

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

  constructor(private publicacionService : PublicacionService ) { }

  ngOnInit() {
    this.LoadPublicaciones();
  }

  private LoadPublicaciones (): void{
    this.publicacionService.getUsers().subscribe(res => {
      this.publicaciones = res;
    });
  }

}
