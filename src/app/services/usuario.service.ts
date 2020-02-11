import { Injectable } from '@angular/core';
import { IusuarioService } from './Iusuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IusuarioService {
  isLogged: boolean;
  usuario: Usuario;

  constructor() {
    console.trace('UsuarioService constructor');
    this.isLogged = false;
    this.usuario = undefined;
  }//constructor

  isLogueado(): boolean {
    console.trace('UsuarioService isLogueado');
    return this.isLogged;
  }//isLogueado()

  login(nombre: string, password: string): Usuario {
    console.trace('UsuarioService login nombre %s password %s', nombre, password);
    const NOMBRE = 'admin';
    const PASS = 'admin';

    if (NOMBRE == nombre && PASS == password) {
      //usuario logueado
      console.log('usuario logueado');
      this.usuario.id = 99;
      this.usuario.nombre = NOMBRE;
      this.usuario.password = PASS;
      this.isLogged = true;
    } else {
      //Usuario no logueado
      console.log('usuario no logueado');
      this.isLogged = false;
    }

    return this.usuario;
  }//login

  logout(id: number) {
    console.trace('logout');
    this.isLogged = false;
  }//logout


}
