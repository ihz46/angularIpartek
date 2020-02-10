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
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { FormsModule } from '@angular/forms';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayadoDirective } from './directives/subrayado.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RecetaFilterPipe } from './pipes/receta-filter.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PaginasComponent,
    ArraysComponent,
    NavbarComponent,
    ProductosComponent,
    InicioComponent,
    PokemonRestComponent,
    EstilosComponent,
    JuegoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayadoDirective,
    AnimalesPipe,
    RecetarioComponent,
    FooterComponent,
    RecetaFilterPipe,
    Error404Component,
    SaludarComponent,
    TareasComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, //Módulo para llamadas por HTTP
    AppRoutingModule,
    FormsModule //Módulo para utilizar formularios

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
