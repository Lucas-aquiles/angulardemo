import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http'; // ❗ Importa HttpClientModule

interface Pokemon {
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemonrender',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pokemonrender.component.html',
  styleUrls: ['./pokemonrender.component.css'],
})
export class PokemonrenderComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data;
    });
  }
}
