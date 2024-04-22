import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej1HolaMundoComponent } from './ej1-hola-mundo.component';

describe('Ej1HolaMundoComponent', () => {
  let component: Ej1HolaMundoComponent;
  let fixture: ComponentFixture<Ej1HolaMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej1HolaMundoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej1HolaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
