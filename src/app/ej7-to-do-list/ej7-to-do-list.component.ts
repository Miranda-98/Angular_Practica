import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ej7-to-do-list',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ej7-to-do-list.component.html',
  styleUrl: './ej7-to-do-list.component.css'
})
export class Ej7ToDoListComponent {
  formToDo: FormGroup;
  listaTareas: string[] = []; // Suponiendo que listaTareas es un array de strings
  tareasSeleccionadas: boolean[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.formToDo = this.formBuilder.group({
      tarea: ['', Validators.required]
    });
  }

  agregar() {
    const tarea = this.formToDo.value.tarea;
    this.listaTareas.push(tarea);
    this.tareasSeleccionadas.push(false);
    this.formToDo.reset();
  }

  actualizarTareasSeleccionadas(event: any, index: number) {
    this.tareasSeleccionadas[index] = event.target.checked;
  }

  hayTareasSeleccionadas(): boolean {
    return this.tareasSeleccionadas.some(seleccionada => seleccionada);
  }

  eliminar() {
    for (let i = this.tareasSeleccionadas.length - 1; i >= 0; i--) {
      if (this.tareasSeleccionadas[i]) {
        this.listaTareas.splice(i, 1);
        this.tareasSeleccionadas.splice(i, 1);
      }
    }
  }

}
