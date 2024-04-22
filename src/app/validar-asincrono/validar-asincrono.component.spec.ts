import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarAsincronoComponent } from './validar-asincrono.component';

describe('ValidarAsincronoComponent', () => {
  let component: ValidarAsincronoComponent;
  let fixture: ComponentFixture<ValidarAsincronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarAsincronoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarAsincronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
