import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})

export class JuegoComponent implements OnInit {
  //variables
  jugador: string;
  puntos: number;
  visible = false;
  ranking = new Map();

  constructor() {
    this.jugador = '';
    this.puntos = 0;
    this.ranking.set('', 0);

  }//fin constructor

  ngOnInit() {

  }//fin ngOnInit()

  comenzarJuego() {
    this.visible = true;

  }//fin comenzarJuego();

  contarClicks() {
    this.puntos++;

    for (let value of this.ranking.values()) {
      console.log(value);
    }
    console.log(this.jugador)
    this.ranking.set(this.jugador, this.puntos);

  }//fin contarClicks();









}

