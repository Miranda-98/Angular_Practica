import { CommonModule } from '@angular/common';
import { Component, ElementRef  } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ej3-formulario-contacto',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './ej3-formulario-contacto.component.html',
  styleUrl: './ej3-formulario-contacto.component.css'
})
export class Ej3FormularioContactoComponent {
  modalVisible = false;

  // formulario = new FormGroup({
  //   nombre: new FormControl(''),
  //   email: new FormControl(''),
  //   mensaje: new FormControl(''),
  // });

  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    mensaje: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]]
  });

  constructor(private formBuilder: FormBuilder) {}

  enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí podrías enviar el formulario
      this.mostrarModal();
    }
  }

  mostrarModal() {
    this.modalVisible = true;
    alert("mensaje enviado, no funciona el modal");
  }

  cerrarModal() {
    this.modalVisible = false;
  }

}
