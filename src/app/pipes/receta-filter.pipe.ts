import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFilter'
})
export class RecetaFilterPipe implements PipeTransform {

  /**
   * Filtro que busca recetas pasando como parámetro si tiene gluten y por nombre, o nombre de autor..
   * @param value 
   * @param checkGluten boolean
   * @param busqueda 
   */
  transform(recetas: any, checkGluten: boolean, busqueda: string): any {
    let resultado = recetas;

    console.debug(resultado);
    console.debug('checkGluten', checkGluten)
    console.debug('busqueda', busqueda);

    //Comprobamos el gluten con el check
    if (checkGluten) {
      resultado = resultado.filter((el) => el.isGlutenFree);
    }

    //Pasamos lo buscado a minuscula
    busqueda = busqueda.toLowerCase();

    //Comprobamos que no sea vacía la búsqueda
    if (busqueda && '' !== busqueda) {
      resultado = resultado.filter((el) => {

        //Guardamos los ingredientes concatenados, en caso de que no haya ninguno lo inicialicamos en vacío para evitar undefined
        const ingredientes = el.ingredientes.reduce((c, p) => c + p, '');

        //Unimos el nombre de la receta, el cocinero y los ingredientes.
        const encontrar = (el.nombre + el.cocinero + ingredientes).toLowerCase();

        //Buscamos en el churro trozos que contengan el parámetro de búsqueda
        return encontrar.includes(busqueda);

      })
    }
    return resultado;
  }//Cierre transform

}
