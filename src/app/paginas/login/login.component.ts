import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    console.trace('LoginComponent constructor');

    //construir formulario
    this.formulario = this.builder.group({
      //Definimos los formControl = Inputs
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]

    });
  }//constructor

  ngOnInit() {
    console.trace('ngOnInit');
  }// ngOnInit()


  enviar(values: any) {
    console.trace('Enviar formulario %o', values);

    //Recogemos los parámetros de usuario
    const nombre = values.nombre;
    const pass = values.pass;

    //creamos el usuario
    const uLogeado = this.usuarioService.login(nombre, pass);

    if (uLogeado) {
      console.trace('Usuario logeado con exito %o', uLogeado);
      this.router.navigate(['backoffice']);
    } else {
      console.warn('Usuario NO logeado');
      // TODO cambiar alert
      alert('Por favor prueba de nuevo a logearte');
    }

  }//enviar()

}//LoginComponent
