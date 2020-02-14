import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Fruta } from 'src/app/model/fruta.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  //Recibimos el array de frutas del componente padre
  @Input() frutas: Array<Fruta>;

  //Enviamos la fruta a otro componente
  @Output() tomaFrutaEvento = new EventEmitter();


  frutaSeleccionada: Fruta;

  constructor() {
    //Inicializamos el array de frutas por si está undefined
    this.frutas = new Array<Fruta>();

    //Inicializamos la fruta seleccionada
    this.frutaSeleccionada = new Fruta();

  }// constructor()


  ngOnInit() {

  }// ngOnInit()

  seleccionarFruta(fruta: Fruta) {
    console.debug('click seleccionarFruta %o', fruta);

  }//seleccionarFruta(fruta: Fruta)

  //Cuando se lance el evento on click en la plantilla llamaremos a este método
  enviarFruta(event, fruta) {
    console.debug('Enviamos el evento al padre (fruta) al padre %o', fruta);

    this.frutaSeleccionada = fruta;

    //Emitimos un evento que contendrá la fruta que hemos seleccionado
    this.tomaFrutaEvento.emit(this.frutaSeleccionada);
  }
}
