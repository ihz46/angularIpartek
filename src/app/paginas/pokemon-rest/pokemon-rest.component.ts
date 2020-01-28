import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;
  propiedades: [];


  constructor(private pokemonService: PokemonService) {
    console.trace('PokemonRestComponent constructor');
    this.pokemon = new Pokemon();
    //this.pokemon.nombre = 'Ditto'; //setter
    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('ngOnInit PokemonRestComponent');

    /**Llamadas a los servicios
      
      1- Hay que suscribirse a un observable
      2- Cuando llamamos a un Observable tenemos 3 posibles métodos
      3- Solo 1 es obligatorio
      
      
     **/

    this.pokemonService.getPokemon('squirtle').subscribe(

      //Esto es similar a un bloque try,catch,finally
      data => {
        //Petición satisfactoria
        //Mapeamos de json a pokemon:
        console.debug(data.name)
        this.propiedades = data;

        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;

        console.debug('petición correcta data %0', data);
      },

      error => {
        //Petición errónea
        console.error('petición erronea data %0', error);
      },

      () => {
        console.trace('Esto se hace siempre')
      }
    );



  }

}
