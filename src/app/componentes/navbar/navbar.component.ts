import { Component, OnInit } from '@angular/core';
import { RUTAS } from '../../rutas';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas: Array<any>;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.rutas = RUTAS;

  }//constructor

  ngOnInit() {
    console.trace('NavBarComponent ngOnInit');

  }//ngOnInit()

  logout() {
    console.trace('NavBarComponent salir');
    const mensaje = '¿Estas seguro de que quieres cerrar la sesión?';

    if (confirm(mensaje)) {
      this.usuarioService.cerrarSesion();
      this.router.navigate(['/']);//vamos a inicio
    }
  }//salir

}//NavbarComponent
