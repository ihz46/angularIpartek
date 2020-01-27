import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  //Declaramos variables
  numero: number;

  constructor() {
    //Iniciamos variables
    console.trace('BotonComponent constructor');
    this.numero = 0;
  }

  ngOnInit() {

  }

  //funciones
  contadorBoton = function (numero) {
    console.trace('Contador botón');
    if (this.numero >= 0 && this.numero < 10) {
      this.numero++;
    } else {
      this.numero--;
    }



  }

}
