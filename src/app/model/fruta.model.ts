import { Color } from './color.model';

export class Fruta {

    id: number;
    nombre: string;
    precio: number;
    imagen: string;
    colores: Array<Color>;

    constructor(nombre?: string) {
        this.id = 0;
        //Si el nombre esta definido, le asignas nombre, y si no lo está vacío
        this.nombre = (nombre) ? nombre : '';
        this.precio = 0;
        this.imagen = 'assets/imagen/frutas.jpeg';
        this.colores = new Array<Color>();
    }

}

