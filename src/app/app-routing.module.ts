import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { BackofficeComponent } from './paginas/backoffice/backoffice.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';
import { ComprasComponent } from './paginas/compras/compras.component';


/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'pokemon', component: PokemonRestComponent },
  { path: 'estilos', component: EstilosComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'filtros', component: FiltrosComponent },
  { path: 'recetario', component: RecetarioComponent },
  { path: 'saludar/:pNombre', component: SaludarComponent }, //Los dos puntos indican que es un parametro
  { path: 'tareas', component: TareasComponent },
  //We´re going to protect this route with a GUARD
  { path: 'backoffice', component: BackofficeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'compras', component: ComprasComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
