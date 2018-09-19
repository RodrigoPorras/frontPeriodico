import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { publicacionModel } from 'app/model/publicacion.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublicacionService {
  constructor(private http: HttpClient) { }

  public getPublicaciones():Observable<publicacionModel[]>{
    return this.http.get<publicacionModel[]>("http://localhost:8080/getPublicaciones");

  }
  public deletePublicacion(publicacion : publicacionModel ):void{
    this.http.post("http://localhost:8080/deletePublicacion",JSON.stringify(publicacion)).subscribe();
    location.reload(); 
    
  }
}
