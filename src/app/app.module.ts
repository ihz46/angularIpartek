import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { PaginasComponent } from './paginas/paginas.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    PaginasComponent,
    ArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Módulo para llamadas por HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
