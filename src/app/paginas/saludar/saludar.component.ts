import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre: string;

  //Pasamos como argumento la ruta activa
  constructor(private route: ActivatedRoute) {

    console.trace('SaludarComponent ');
    this.nombre = '';
    //Nos subscribimos porque es observable
    this.route.params.subscribe(params => {
      console.log(this.nombre);
      return this.nombre = params['pNombre'];
    });
  }//constructor()

  ngOnInit() {

  }//ngOnInit

}// SaludarComponent 
