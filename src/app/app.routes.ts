import { Routes } from '@angular/router';
import { Ej1HolaMundoComponent } from './ej1-hola-mundo/ej1-hola-mundo.component';
import { Ej2SaludoPersonalizadoComponent } from './ej2-saludo-personalizado/ej2-saludo-personalizado.component';
import { Ej3FormularioContactoComponent } from './ej3-formulario-contacto/ej3-formulario-contacto.component';
import { Ej7ToDoListComponent } from './ej7-to-do-list/ej7-to-do-list.component';

export const routes: Routes = [
  {
    path: 'ej1',
    component: Ej1HolaMundoComponent,
    title: "Ej1 Hola Mundo"
  },
  {
    path: 'ej2',
    component: Ej2SaludoPersonalizadoComponent,
    title: "Ej2 Saludo Personalizado"
  },
  {
    path: 'ej3',
    component: Ej3FormularioContactoComponent,
    title: "Ej3 Formulario Contacto"
  },
  {
    path: 'ej7',
    component: Ej7ToDoListComponent,
    title: 'Ej7 To Do List'
  }
];

export default routes;
