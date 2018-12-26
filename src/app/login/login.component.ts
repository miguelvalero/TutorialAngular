import { Component, OnInit } from '@angular/core';
import { ServiciosListaService } from '../servicios-lista.service';
import { ServiciosAPIService } from '../servicios-api.service';
import {Persona} from '../Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  persona: Persona;
  nombre: string;
  pass: string;
  mensaje: string;
  constructor( private servicios: ServiciosListaService,
               private servicioAPI: ServiciosAPIService ) { }

  ngOnInit() {
  }

  Autentificar (): void {
    console.log ('Autentifico');
    console.log ('Busco: ' + this.nombre);
    this.servicioAPI.getPersona(this.nombre)
    .subscribe(persona => { this.persona = persona;
                            this.Verificar();
    });
  }

  Verificar (): void {
    console.log ('Task');
    console.log (this.persona);
    if (this.persona.pass === this.pass) {
      this.mensaje = '';
      console.log (this.persona);
      if (this.persona.rol === 'Alumno') {
        console.log ('Alumno');
        console.log ('Vamos a: ' + this.persona.nombre);
        window.location.href = '/alumno/' + this.persona.nombre;
      } else {
        window.location.href = '/profesor';
      }

    } else {
      this.mensaje = 'Password incorrecto';
    }
  }
}
