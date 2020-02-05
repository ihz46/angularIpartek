import { Component, OnInit } from '@angular/core';
import { BotonComponent } from 'src/app/componentes/boton/boton.component';
import { Key } from 'protractor';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})

export class JuegoComponent implements OnInit {
  //variables
  jugador: string;
  puntos: number;
  visible: boolean;
  ranking: Map<string, number>

  constructor() {
    this.jugador = '';
    this.visible = false;
    this.puntos = 0;
    this.ranking = new Map<string, number>();

  }//fin constructor

  ngOnInit() {

  }//fin ngOnInit()

  comenzarJuego() {
    console.log('Entra en comenzar juego');
    this.visible = true;
    setTimeout(() => {
      console.log(this.visible);
      this.visible = false;
      this.puntos = 0;
      this.jugador = '';
    }, 2000);

  }//fin comenzarJuego();

  contarClicks() {
    console.log('Entra en contarClicks');
    this.puntos++;

    this.ranking.set(this.jugador, this.puntos);
  }

}//fin contarClicks();











