import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ServiciosListaService } from '../servicios-lista.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'puntos', 'incrementar', 'eliminar'];

  lista: Persona[] = [];

  nombre: string;
  pass: string;
  rol: string;
  puntos: number;
  constructor( private servicios: ServiciosListaService) { }

  ngOnInit() {
  }

  Mostrar (): void {
    this.lista = this.servicios.DameLista();
  }

  Incrementar (nombre: string): void {
    this.lista = this.servicios.Incrementar (nombre);
  }

  Eliminar (nombre: string): void {
    this.lista = this.servicios.Eliminar (nombre);
  }

  OrdenarPuntos (): void {
    console.log ('Entro a ordenar');
    console.log (this.lista);

    this.lista = this.servicios.OrdenarPuntos ();
    console.log ('Lista ordenada');
    console.log (this.lista);
    this.lista = this.servicios.Eliminar ('JJJJ');
  }

  Pon (): void {
    this.lista = this.servicios.PonPersona(new Persona (this.nombre, this.pass, this.rol, this.puntos));
    this.lista = this.servicios.Eliminar ('JJJJ');
  }
}
