import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosListaService } from '../servicios-lista.service';
import {Persona} from '../Persona';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Persona;
  nuevoPass: string;
  constructor( private servicios: ServiciosListaService,
               private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.DameAlumno();
  }

  DameAlumno(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.alumno = this.servicios.damePersona(nombre);
  }

  Cambia(): void {
   // this.servidorPersonas.ponPass(this.alumno);
    this.alumno.pass = this.nuevoPass;
    console.log (this.servicios.DameLista());
  }

  goBack(): void {
    console.log ('volvemos');
    this.location.back();
  }

}
