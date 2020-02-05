import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda: string, tipo: string): any {

    console.debug(datos);
    console.debug(busqueda);

    console.debug(tipo);

    tipo = tipo.toUpperCase();
    busqueda = busqueda.toUpperCase();

    const resultado = datos.filter((el) => {
      console.debug(el);
      const nombre = el.Nombre.toUpperCase();
      const tipoAnimal = el.Tipo.toUpperCase();
      return nombre.includes(busqueda);

    });

    return resultado;

  }// transform

}// AnimalesPipe