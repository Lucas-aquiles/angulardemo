import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // ❗ Importa HttpClientModule

interface Pokemon {
  name: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemons: Pokemon[] = [];

  shouldDisable: boolean = false;
  title = 'Demo Luqueti';
  logoSrc = '/assets/logo.png';
  isSubscribed: boolean = false;
  isOnBodyRoute = false;

  onSubscribeClick(data: any) {
    console.log(data);
    this.isSubscribed = !this.isSubscribed;
  }
}
