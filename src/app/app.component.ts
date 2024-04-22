import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Ej1HolaMundoComponent } from './ej1-hola-mundo/ej1-hola-mundo.component';
import { Ej2SaludoPersonalizadoComponent } from './ej2-saludo-personalizado/ej2-saludo-personalizado.component';
import { Ej3FormularioContactoComponent } from './ej3-formulario-contacto/ej3-formulario-contacto.component';
import { CommonModule } from '@angular/common';
import { Ej7ToDoListComponent } from './ej7-to-do-list/ej7-to-do-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, Ej1HolaMundoComponent,
     Ej2SaludoPersonalizadoComponent, Ej3FormularioContactoComponent, Ej7ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EJ_Basicos_Notion';

  constructor(public router: Router) { }

}
