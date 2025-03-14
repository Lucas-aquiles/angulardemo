import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

class ActivatedRouteMock {
  // Aquí puedes simular las propiedades necesarias para tus pruebas
  snapshot = { data: {} };
  paramMap = of({ get: (key: string) => null }); // Simula la lectura de parámetros de la ruta
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let pokemonService: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientModule], // Asegúrate de importar el componente
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getPokemons: () => of([{ name: 'Pikachu', image: 'pikachu.png' }]), // Simulamos el servicio
          },
        },
        {
          provide: ActivatedRoute, // Proporcionamos el mock de ActivatedRoute
          useClass: ActivatedRouteMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemons on init', () => {
    fixture.detectChanges();
    expect(component.pokemons.length).toBeGreaterThan(0);
    expect(component.pokemons[0].name).toBe('Pikachu');
  });
});
