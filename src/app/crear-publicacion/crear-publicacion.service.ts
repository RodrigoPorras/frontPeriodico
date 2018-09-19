import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { RestResponse } from 'app/model/restResponse.model';
import { publicacionModel } from 'app/model/publicacion.model';
@Injectable()
export class CrearPublicacionService {

  constructor(private http:HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   * @param publicacion 
   */
  public validate(publicacion : publicacionModel):boolean{
    let isValid = true;

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    
    publicacion.fechaPublicacion =  utc;

    if(!publicacion.titulo){
      isValid = false;
    }
    if(!publicacion.contenido){
      isValid = false;
    }
    return isValid;
  }
  public saveOrUpdate(publicacion : publicacionModel ): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(publicacion));
  }
}
