import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

// @Component({
//   selector: 'app-validar-asincrono',
//   standalone: true,
//   imports: [],
//   templateUrl: './validar-asincrono.component.html',
//   styleUrl: './validar-asincrono.component.css'
// })
// export class ValidarAsincronoComponent {

// }

export function validarNombreAsync(control: AbstractControl): Observable<ValidationErrors | null> {
  const nombre: string = control.value;
  if (nombre && /^[a-zA-Z\s]*$/.test(nombre)) {
    return of(null); // Emit null si el nombre es válido
  } else {
    return of({ 'incorrecto': true }); // Emit un objeto de error si el nombre no es válido
  }
}
