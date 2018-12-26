import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ServiciosListaService } from '../servicios-lista.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  lista: Persona[] = [];

  nombre: string;
  pass: string;
  rol: string;
  puntos: number;
  constructor(  private servicios: ServiciosListaService,
                private location: Location) { }

  ngOnInit() {
  }

  Mostrar (): void {
    this.lista = this.servicios.DameLista();
  }

  Incrementar (nombre: string): void {
    this.servicios.Incrementar (nombre);
  }

  Eliminar (nombre: string): void {
    this.lista = this.servicios.Eliminar (nombre);
  }

  OrdenarPuntos (): void {
    this.lista = this.servicios.OrdenarPuntos ();
  }

  Pon (): void {
    this.servicios.PonPersona(new Persona (this.nombre, this.pass, this.rol, this.puntos));
  }

  goBack(): void {
    console.log ('volvemos');
    this.location.back();
  }
}
