import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej3FormularioContactoComponent } from './ej3-formulario-contacto.component';

describe('Ej3FormularioContactoComponent', () => {
  let component: Ej3FormularioContactoComponent;
  let fixture: ComponentFixture<Ej3FormularioContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej3FormularioContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej3FormularioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
