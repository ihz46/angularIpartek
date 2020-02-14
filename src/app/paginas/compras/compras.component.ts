import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutaSeleccionada: Fruta;
  frutas: Array<Fruta>;

  constructor() {
    this.frutaSeleccionada = new Fruta();

    this.frutas = [];
    this.frutas.push(new Fruta('pera'));
    this.frutas.push(new Fruta('manzana'));
    this.frutas.push(new Fruta('aguacate'));
    this.frutas.push(new Fruta('mandarina'));

  }//constructor()

  ngOnInit() {

  }//ngOnInit()

  recogerEvento(event) {
    console.debug('Soy el componente padre y recibo %o', event);
    this.frutaSeleccionada = event;
  }//recogerEvento()

}
