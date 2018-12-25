import { Injectable } from '@angular/core';
import { Persona } from './Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiciosListaService {
  lista: Persona[] = [];

  constructor() {
    this.lista[0] = new Persona ('Juan', 'JJJ', 'Profesor', 0);
    this.lista[1] = new Persona ('Pedro', 'PPP', 'Alumno', 0);
    this.lista[2] = new Persona ('Maria', 'MMM', 'Profesor', 0);
    this.lista[3] = new Persona ('Lucas', 'LLL', 'Alumno', 0);
    this.lista[4] = new Persona ('Salva', 'SSS', 'Alumno', 0);
    this.lista[5] = new Persona ('Rocio', 'RRR', 'Alumno', 0);
  }

  DameLista (): Persona[] {
    return  this.lista;
  }
  Incrementar (nombre: string) {
    this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
  }

  Eliminar (nombre: string): Persona [] {
    this.lista = this.lista.filter(persona => persona.nombre !== nombre);
    return this.lista;
  }

  OrdenarPuntos (): Persona [] {
    return this.lista.sort(function(obj1, obj2) {
      return obj1.puntos - obj2.puntos;
    });
  }

  PonPersona(persona: Persona): void {
    this.lista.push(persona);
  }

}