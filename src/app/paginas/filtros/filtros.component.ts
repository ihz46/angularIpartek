import { Component, OnInit } from '@angular/core';
import { ANIMALES } from '../../animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche: any;
  animales: Array<any>;

  constructor() {
    this.coche =
    {
      "nombre": "audi r8",
      "color": "blanco",
      "isDiesel": "false",
      "precio": "100000.45"

    };

    this.animales = ANIMALES;

  }//constructor()

  ngOnInit() {

  }// ngOnInit

}//FiltrosComponent
