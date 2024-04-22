import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { validarNombreAsync } from '../validar-asincrono/validar-asincrono.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ej2-saludo-personalizado',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './ej2-saludo-personalizado.component.html',
  styleUrl: './ej2-saludo-personalizado.component.css'
})
export class Ej2SaludoPersonalizadoComponent {
  mensajeSaludo: string = '';
  nombre: string = '';

  formulario = new FormGroup({
    nombreInput: new FormControl(''),
  });


  constructor(private form: FormBuilder){
    this.formulario = this.form.group({
      nombreInput: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    })
  }

  validarNoNull(valor: any): boolean {
    return valor !== null;
  }

  /*saludar() {
    const nombreInput = this.formulario.get('nombreInput');
    if (nombreInput !== null && this.validarNoNull(nombreInput)) {
      this.mensajeSaludo = nombreInput?.value;
      console.log("Nombre introducido:", this.mensajeSaludo);
    }
  }*/


  saludar() {
    var nombre = this.formulario.get('nombreInput')?.value;
    console.log("pepe -> ", nombre);
    if (nombre) {
      this.mensajeSaludo = nombre!;
    } else {
      alert("vacio");
    }
  }


}
