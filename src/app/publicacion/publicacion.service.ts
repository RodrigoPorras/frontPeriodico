import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { publicacionModel } from 'app/model/publicacion.model';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PublicacionService {
  constructor(private http: HttpClient) { }

  public getUsers():Observable<publicacionModel[]>{
    return this.http.get<publicacionModel[]>("http://localhost:8080/getPublicaciones");

  }

}
