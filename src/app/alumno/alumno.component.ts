import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosListaService } from '../servicios-lista.service';
import {Persona} from '../Persona';
import { Location } from '@angular/common';
import { ServiciosAPIService } from '../servicios-api.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno = new Persona ('A', 'A', 'alumno', 7);
  nuevoPass: string;
  constructor( private servicios: ServiciosListaService,
               private servicioAPI: ServiciosAPIService,
               private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    this.DameAlumno();
  }

  DameAlumno(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.servicioAPI.getPersona(nombre)
    .subscribe(persona =>  this.alumno = persona);
  }

  Cambia(): void {
   // this.servidorPersonas.ponPass(this.alumno);
    this.alumno.pass = this.nuevoPass;
    this.servicioAPI.putPersona(this.alumno)
    .subscribe();
  }

  goBack(): void {
    console.log ('volvemos');
    this.location.back();
  }

}
