import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloNuevo: string;
  tareaEliminada: Tarea;

  //gestion de mensajes
  isVisible: boolean;
  mensaje: string;
  isDanger: boolean;

  //visibilidad edición
  modoEdicion: boolean;

  //Hay que pasarle al constructor el service
  constructor(private servicioTarea: TareasService) {

    console.trace('TareasComponent constructor');
    this.tareas = [];//Inicializar el array
    this.tituloNuevo = '';
    this.tareaEliminada = new Tarea();

    //Gestion mensajes
    this.isVisible = false;
    this.mensaje = '';
    this.isDanger = false;

    //Modo edición
    this.modoEdicion = false;

  }//constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    //Llamar al service para obtener tareas
    this.cargarTareas();
  }//ngOnInit

  editarEstado(tarea: Tarea) {
    console.debug('click %o', tarea);
    tarea.completada = !tarea.completada;

    //Ahora refrescamos la lista tras modificar
    this.servicioTarea.modificar(tarea).subscribe(() => this.cargarTareas());
    this.isVisible = true;
    this.mensaje = 'Se ha modificado correctamente la tarea ' + tarea.id;

  }//editarEstado


  /**
   * Llama al servicio para cargar todas las tareas
   * Nos va a servir para refrescar la lista
   */
  cargarTareas(): void {
    //Nos subscribimos porque es un observable, y en el momento pasamos a ser observadores.
    this.servicioTarea.listar().subscribe(datos => {
      console.debug('Esto se ejecuta de forma asíncrona');
      this.tareas = datos;
    },
      error => {
        console.warn('Servicio REST no funciona');
        this.isVisible = true;
        this.isDanger = true;
        this.mensaje = 'El servicio REST no funciona, arrancalo';

      });
  }//cargarTareas

  /**
   * Método para 
   * @param nombre 
   */
  crearTarea() {
    console.debug('click en crear tarea %s', this.tituloNuevo);
    let tNueva = new Tarea();
    tNueva.titulo = this.tituloNuevo;
    console.debug(tNueva);
    if (this.tituloNuevo.length < 1 && this.tituloNuevo.trim().length < 1) {
      this.mensaje = "Debes de crear una tarea más larga";
      this.isVisible = true;
      this.isDanger = true;
    } else {
      this.servicioTarea.crear(tNueva).subscribe(tarea => {
        console.debug('Nueva tarea %o', tarea)
        this.cargarTareas()
        this.tituloNuevo = '';
        this.mensaje = ('Se ha creado la tarea ' + tarea.id);
        this.isVisible = true;
        this.isDanger = false;

      });
    }


  }//CreaTarea

  eliminarTarea(tarea: Tarea): void {
    console.debug('Click eliminar tarea %o', tarea)
    let opcion = confirm('¿Estas seguro de eliminar la tarea? ');

    if (opcion) {
      console.debug('Se ha eliminado la tarea');
      this.tareaEliminada = tarea;
      this.servicioTarea.eliminar(tarea.id).subscribe(() => {
        this.isVisible = true;
        this.isDanger = true;
        this.mensaje = `Eliminada [${tarea.id}] ${tarea.titulo}`;
        this.cargarTareas();
      });


    } else {
      console.debug('No se ha eliminado');
    }
  }//confirmar

  cambiarTitulo(tarea: Tarea): void {
    console.debug('Perdemos el focus para cambiar titulo %o', tarea);
    this.servicioTarea.modificar(tarea).subscribe(() => this.cargarTareas());

  }// cambiarTitulo

}//TareasComponent
