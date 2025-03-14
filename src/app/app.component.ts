import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Importa RouterOutlet y RouterLink

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shouldDisable: boolean = false;
  title = 'demoluqueti';
  subtitle = 'vamos';
  logoSrc = '/assets/logo.png';

  isSubscribed: boolean = false;

  onSubscribeClick(data: any) {
    console.log(data);
    this.isSubscribed = !this.isSubscribed;
  }
}
