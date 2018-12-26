import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { ServiciosListaService } from '../servicios-lista.service';
import { Location } from '@angular/common';
import { ServiciosAPIService } from '../servicios-api.service';

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
                private servicioAPI: ServiciosAPIService,
                private location: Location) { }

  ngOnInit() {
  }

  Mostrar (): void {
    this.servicioAPI.getTodos ()
    .subscribe(lista =>  this.lista = lista);
  }

  Incrementar (alumno: Persona): void {
    this.servicioAPI.IncrementarPuntos (alumno).subscribe( () => this.Mostrar());
  }

  Eliminar (nombre: string): void {
    this.servicioAPI.BorrarPersona (nombre).subscribe( () => this.Mostrar());
  }

  OrdenarPuntos (): void {
    this.servicioAPI.getTodos ()
    .subscribe(lista =>  this.lista = lista
      .sort(function(obj1, obj2) {
              return obj1.puntos - obj2.puntos;
      }));
  }

  Pon (): void {
    this.servicioAPI.AñadePersona(new Persona (this.nombre, this.pass, this.rol, this.puntos))
    .subscribe(() => this.Mostrar());
  }

  goBack(): void {
    console.log ('volvemos');
    this.location.back();
  }
}
