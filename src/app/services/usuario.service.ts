import { Injectable } from '@angular/core';
import { IusuarioService } from './Iusuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IusuarioService {

  isLogged: boolean;
  usuario: Usuario;
  storage: any;

  constructor() {
    console.trace('UsuarioService constructor');
    this.isLogged = false;
    this.usuario = undefined;
    this.storage = window.sessionStorage;

  }//constructor

  isLogueado(): boolean {
    console.trace('UsuarioService isLogueado');

    if (this.storage.getItem('isLogged')) {
      return true;
    }
    return false;
  }//isLogueado()

  login(nombre: string, pass: string): Usuario {
    console.trace('UsuarioService login nombre %s password %s', nombre, pass);
    const NOMBRE = 'admin';
    const PASS = 'admin123';
    let usuarioBuscar: Usuario;

    if (NOMBRE == nombre && PASS == pass) {
      //usuario logueado
      console.log('usuario logueado');
      //crear usuario
      usuarioBuscar = new Usuario();
      usuarioBuscar.id = 99;
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = pass;
      console.log('usuario logueado %o', usuarioBuscar);
      //indicamos que esta logueado
      this.isLogged = true;

      // marcar que esta logeado
      this.storage.setItem('usuarioStorage', JSON.stringify(usuarioBuscar));
    } else {
      //Usuario no logueado
      console.log('usuario no logueado');
      this.storage.setItem('isLogged', false)
    }

    return usuarioBuscar;
  }//login

  logout(id: number) {
    console.trace('logout');
    this.isLogged = false;
  }//logout

  cerrarSesion() {
    console.trace('UsuarioService cerrarSesion');
    this.storage.removeItem('isLogged')
    this.isLogged = false;
  }


}
