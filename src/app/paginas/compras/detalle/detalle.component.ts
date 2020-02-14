import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from 'src/app/model/fruta.model';
import { Color } from 'src/app/model/color.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() fruta: Fruta;

  constructor() {
    this.fruta = new Fruta();
    this.fruta.nombre = '';
    this.fruta.imagen = 'https://media.mercola.com/assets/images/foodfacts/papaya-nutrition-facts.jpg';
    this.fruta.precio = 0;



  }//constructor()

  ngOnInit() {

  }//ngOnInit()

}
