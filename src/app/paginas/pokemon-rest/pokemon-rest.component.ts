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
  mensaje: string;
  pokemonBuscado: string;

  tipo: string;

  constructor(private pokemonService: PokemonService) {
    console.trace('PokemonRestComponent constructor');

    //ponemos a null el mensaje
    this.mensaje = '';
    this.tipo = '';
    this.pokemonBuscado = '';
    this.pokemon = new Pokemon(0, '', '', '');
    //this.pokemon.nombre = 'Ditto'; //setter
    console.debug(this.pokemon);
  }

  buscarPokemon() {
    console.trace('Pokemon buscado %s', this.pokemonBuscado);

    /**Llamadas a los servicios
    
    1- Hay que suscribirse a un observable
    2- Cuando llamamos a un Observable tenemos 3 posibles métodos
    3- Solo 1 es obligatorio
    
    
   **/

    this.pokemonService.getPokemon(this.pokemonBuscado).subscribe(

      //Esto es similar a un bloque try,catch,finally
      data => {
        //Petición satisfactoria
        //Mapeamos de json a pokemon:
        console.debug(data.name);
        this.pokemon = new Pokemon(0, '', '', '');
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;
        const habilidadesNames = data.abilities.map(el => el.ability.name);

        console.debug(' Habilidades en inglés %o', habilidadesNames);

        habilidadesNames.forEach(habilidad => {

          //Conseguir su habilidad

          this.pokemonService.getHabilidad(habilidad).subscribe(

            datos => {
              console.debug(datos.name)

              const habilidadCastellano = datos.names.find(el => el.language.name === 'es');
              console.debug('Recuperada la habilidad en castellano %s', habilidadCastellano);
              //map(el => el.name);
              //Conseguir su habilidad

              this.mensaje = 'Pokemon cargado desde PokemonAPI.';
              this.tipo = 'alert alert-primary';

              console.debug('petición correcta data %0', datos);
              this.pokemon.habilidades.push(habilidadCastellano.name);
            },

            error => {
              //Petición errónea
              console.error('petición erronea data %0', error);
              this.mensaje = 'No se ha encontrado ningún pokemon';
              this.tipo = 'alert alert-danger';
            },

            () => {
              console.trace('Esto se hace siempre')
            }
          );

        });


        this.mensaje = 'Pokemon cargado desde PokemonAPI.';
        this.tipo = 'alert alert-primary';

        console.debug('petición correcta data %0', data);
      },

      error => {
        //Petición errónea
        console.error('petición erronea data %0', error);
        this.mensaje = 'No se ha encontrado ningún pokemon';
        this.tipo = 'alert alert-danger';
      },

      () => {
        console.trace('Esto se hace siempre')
      }
    );


  }

  ngOnInit() {
    console.trace('ngOnInit PokemonRestComponent');




  }

}
