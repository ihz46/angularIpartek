import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PaginasComponent } from './paginas/paginas.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PaginasComponent,
    ArraysComponent,
    NavbarComponent,
    ProductosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //Módulo para llamadas por HTTP
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
