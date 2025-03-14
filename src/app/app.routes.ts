import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonRenderComponent } from './components/pokemonrender/pokemonrender.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'body', component: PokemonRenderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
