import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej7ToDoListComponent } from './ej7-to-do-list.component';

describe('Ej7ToDoListComponent', () => {
  let component: Ej7ToDoListComponent;
  let fixture: ComponentFixture<Ej7ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej7ToDoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ej7ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
