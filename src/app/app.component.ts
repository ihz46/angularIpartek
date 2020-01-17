import { Component } from '@angular/core';

/*
 * Componente principal que se carga al arrancar la aplicación
 * 
 * selector: nombre de la etiqueta para inyectar el componente.
 * 
 * templateUrl: indica la ruta donde se encuentra la vista en HTML.
 * 
 * styleUrls: indica donde se encuentra el estilo para la vista en formato SCSS.
 * 
 */

@Component({
  selector: 'app-root', //nombre de la etiqueta para inyectar el componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Variable
  title = 'Welcome to THE HELL';
}
