import { Component, OnInit } from '@angular/core';
import { ServiciosListaService } from '../servicios-lista.service';
import {Persona} from '../Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string;
  pass: string;
  mensaje: string;
  constructor( private servicios: ServiciosListaService) { }

  ngOnInit() {
  }

  Autentificar (): void {
    console.log (this.servicios.DameLista());
    let persona: Persona;
    persona = this.servicios.Autentificar (this.nombre, this.pass);
    if (persona != null) {
      this.mensaje = '';
      console.log (persona);
      if (persona.rol === 'Alumno') {
        console.log ('Alumno');
        console.log ('Vamos a: ' + persona.nombre);
        window.location.href = '/alumno/' + persona.nombre;
      } else {
        window.location.href = '/profesor';
      }

    } else {
      this.mensaje = 'Password incorrecto';
    }
  }
}
