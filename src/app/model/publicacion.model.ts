import {ParentEntity} from './parentEntity.model';

export class publicacionModel extends ParentEntity{
    public titulo : string;
    public contenido: string;
    public linkImagen: string;
    public fechaPublicacion: string;
    public link: string;
    public precio: string;
    public tipoPublicacion: string;
}

