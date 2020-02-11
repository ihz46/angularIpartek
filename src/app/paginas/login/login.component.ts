import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder) {
    console.trace('LoginComponent constructor');

    //construir formulario
    this.formulario = this.builder.group({
      //Definimos los formControl = Inputs
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]

    });
  }//constructor

  ngOnInit() {
    console.trace('ngOnInit');
  }// ngOnInit()

  enviar(values: any) {
    console.trace('Enviar formulario %o', values);
  }//enviar()

}//LoginComponent
