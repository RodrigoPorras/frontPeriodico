import { Component, OnInit } from '@angular/core';

import { PublicacionService } from 'app/publicacion/publicacion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
  providers:[PublicacionService]
})
export class PublicacionComponent implements OnInit {

  constructor(private publicacion : PublicacionService ) { }

  ngOnInit() {
  }

}
