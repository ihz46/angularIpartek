import { Tarea } from "../model/tarea";
import { Observable } from 'rxjs';

export interface ITareasService {
    /**
     * Obtener una lista de todas las tareas
     * @return un observable con el array de todas las tareas
     */
    listar(): Observable<Array<Tarea>>;


    /**
     * Obtener el detalle de una tarea, pasando el id
     * @param id de la tarea que se quiere detallar
     * @return un observable con la tarea buscada
     */
    detalle(id: number): Observable<Tarea>;

    /**
     * Crear nueva tarea
     * @param tarea a dar de alta, sin id
     * @return un Observable con la tarea dada de alta y su ID actualizado
     */
    crear(tarea: Tarea): Observable<Tarea>;

    /**
     * Modificar una tareas
     * @param tarea que se quiere modificar
     * 
     */
    modificar(tarea: Tarea): Observable<Tarea>;

    eliminar(id: number): Observable<Tarea>;
}