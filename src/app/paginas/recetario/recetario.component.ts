import { Component, OnInit } from '@angular/core';
import { RECETAS } from 'src/app/recetas';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  recetas: Array<any>;
  rSeleccionada: Array<any>;
  ingredientes: Array<string>;
  checkGluten: boolean;
  busqueda: any;

  constructor() {
    this.busqueda = '';
    this.checkGluten = false;
    this.recetas = RECETAS;
    this.rSeleccionada = this.recetas[0];

  }//constructor

  ngOnInit() {

  }//ngOnInit

  seleccionarReceta(receta) {
    console.log('Click en %o', receta);
    this.rSeleccionada = receta;

  }//seleccionarReceta

}//RecetarioComponent
