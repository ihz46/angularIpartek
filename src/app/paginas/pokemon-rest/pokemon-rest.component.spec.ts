import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRestComponent } from './pokemon-rest.component';

describe('PokemonRestComponent', () => {
  let component: PokemonRestComponent;
  let fixture: ComponentFixture<PokemonRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
