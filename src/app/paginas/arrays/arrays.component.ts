import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;
  totalDescuento: number;
  aSoloNombres: Array<String>;
  frutasConDescuento: Array<String>;
  frutasColorAmarillo: Array<String>;
  precioTotalFrutasColorAmarillo: number;
  primeraFrutaVerde: string;
  colores: Array<String>;

  constructor() {
    console.trace('ArraysComponent constructor');

    this.total = 0;
    this.totalDescuento = 0;
    this.aSoloNombres = [];
    this.frutasConDescuento = [];
    this.colores = [];



    this.frutas = [

      {
        'nombre': 'fresa', 'precio': 2.45, 'descuento': 0, 'colores': ['roja']
      },
      {
        'nombre': 'pera', 'precio': 3.50, 'descuento': 10, 'colores': ['amarillo', 'verde']
      },
      {
        'nombre': 'manzana', 'precio': 1.99, 'descuento': 50, 'colores': ['amarillo', 'verde', 'roja']
      }

    ];
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');
    /*Suma de precios con foreach

      this.frutas.forEach(fruta => {
      this.total += fruta.precio;
      console.log(this.total);
    });*/

    /*Suma de precios con map y reduce

    this.total = this.frutas.map(el => {
      console.debug(el);
      return el.precio;
    }).
      reduce((previous, current) => {
        console.debug(previous, current);
        return previous + current;

      });
    */

    //modo reducido

    //Precio total 
    this.total = this.frutas.map(el => el.precio).reduce((p, c) => c + p);
    //Precio total con descuento
    this.totalDescuento = this.frutas.reduce((p, c) => (p + (c.precio - (c.precio * c.descuento / 100))), 0);
    //Nombres de todas las frutas
    this.aSoloNombres = this.frutas.map(el => el.nombre);
    //Frutas con descuento
    this.frutasConDescuento = this.frutas.filter(el => el.descuento > 0).map(el => el.nombre);
    //Frutas con color amarillo
    this.frutasColorAmarillo = this.frutas.filter(el => el.colores.includes('amarillo')).map(el => el.nombre);

    //Precio total de frutas de color amarillo
    this.precioTotalFrutasColorAmarillo = this.frutas.filter(el => el.colores.includes('amarillo')).map(el => el.precio).reduce((p, c) => c + p);

    //Buscar la primera fruta verde 
    this.primeraFrutaVerde = this.frutas.find(el => el.colores.includes('verde'));

    //Listado de los distintos colores de las frutas
    this.colores = this.frutas.reduce((p, c, i, a) => {
      return p.concat(c.colores);
    }, []).filter((el, index, array) => {
      console.debug(el, index, array);
      return array.indexOf(el) === index;
    });


  }

}
