import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonRenderComponent } from './components/pokemonrender/pokemonrender.component';
import { PokemonService } from './services/pokemon.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonRenderComponent', () => {
  let fixture: ComponentFixture<PokemonRenderComponent>;
  let component: PokemonRenderComponent;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonRenderComponent, HttpClientModule],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getPokemons: () => of([{ name: 'Pikachu', image: 'pikachu.png' }]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonRenderComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemons on init', () => {
    fixture.detectChanges();
    expect(component.pokemons.length).toBeGreaterThan(0);
    expect(component.pokemons[0].name).toBe('Pikachu');
  });
});
