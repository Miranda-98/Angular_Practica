import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2SaludoPersonalizadoComponent } from './ej2-saludo-personalizado.component';

describe('Ej2SaludoPersonalizadoComponent', () => {
  let component: Ej2SaludoPersonalizadoComponent;
  let fixture: ComponentFixture<Ej2SaludoPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej2SaludoPersonalizadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej2SaludoPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
