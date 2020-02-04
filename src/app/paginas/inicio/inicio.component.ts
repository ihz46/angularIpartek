import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //variables
  numeroClicks: number;
  title = 'Angular ';
  visible = false;
  jugador: string;

  constructor() {
    console.trace
    this.numeroClicks = 0;
    this.jugador = '';
  }//constructor


  ngOnInit() {

  }//ngOnInit


  decirAdios() {
    console.trace('DecirAdios()')
    this.visible = true;

  }// decirAdios()

  contarClicks() {
    console.trace(' contarClicks() ')
    this.numeroClicks++;
    alert(this.numeroClicks + this.jugador);
  }//contarClicks()


}//InicioComponent



