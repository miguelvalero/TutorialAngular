import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // persona: Persona;
  nombre: string;
  persona: Persona;
  /* = {
    nombre: 'Juan',
    pass: 'JJJ',
    rol: 'Profesor',
    puntos: 20
  };
*/
  constructor() { }

  ngOnInit() {
  }

  Mostrar (): void {
    console.log ('Entro en mostrar');
    this.persona = new Persona ('Maria', 'MMMM', 'Profesor', 3);
  }

}
