import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController; // Controlador de solicitudes HTTP simuladas

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo para simular las peticiones HTTP
      providers: [PokemonService],
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController); // Inyecta el controlador HTTP
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch pokemons from API', () => {
    const mockPokemons = [
      { name: 'Bulbasaur', image: 'url_de_imagen' },
      { name: 'Charmander', image: 'url_de_imagen' },
    ];

    // Llamamos al método que hace la solicitud
    service.getPokemons().subscribe((pokemons) => {
      expect(pokemons.length).toBe(2);
      expect(pokemons).toEqual(mockPokemons);
    });

    // Simulamos la respuesta de la API
    const req = httpMock.expectOne('http://localhost:3000/pokemon');
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemons); // Enviamos la respuesta simulada
  });

  it('should handle error when API fails', () => {
    service.getPokemons().subscribe(
      (data) => fail('should have failed with 500 error'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne('http://localhost:3000/pokemon');
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
