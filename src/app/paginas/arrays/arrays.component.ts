import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;

  constructor() {
    console.trace('ArraysComponent constructor');

    this.total = 0;
    this.frutas = [

      {
        'nombre': 'fresa', 'precio': 2.45
      },
      {
        'nombre': 'plátano', 'precio': 0.99
      },
      {
        'nombre': 'manzana', 'precio': 1.80
      },
      {
        'nombre': 'kiwi', 'precio': 4.20
      },


    ];
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');
  }

  calcularTotal() {
    for (let f of this.frutas) {
      this.total += this.frutas[f].precio;

    }
  }
}
