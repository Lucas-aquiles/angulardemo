import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonrenderComponent } from './components/pokemonrender/pokemonrender.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'body', component: PokemonrenderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a /home como ruta predeterminada
];
