import { Observable } from "rxjs";
import { Usuario } from '../model/usuario';

export interface IusuarioService {

    /**
     * Comprueba si un usuario esta logueado o no 
     */
    isLogueado(): boolean;

    /**
     * Comprueba que las credenciales del usuario son correctas
     * 
     * @param nombre del usuario que va a hacer login
     * @param password del usuario que va a hacer login
     * @return devuelve un usuario en caso de que exista, undefined si no existe
     */
    login(nombre: string, password: string): Usuario;

    /**
     * 
     * @param usuario 
     */
    logout(id: number);
}