import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonrenderComponent } from './pokemonrender.component';

describe('PokemonrenderComponent', () => {
  let component: PokemonrenderComponent;
  let fixture: ComponentFixture<PokemonrenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonrenderComponent]
    });
    fixture = TestBed.createComponent(PokemonrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
