import { Injectable } from '@angular/core';
import { Persona } from './Persona';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { discardPeriodicTasks } from '@angular/core/testing';



@Injectable({
  providedIn: 'root'
})
export class ServiciosAPIService {
  private APIUrl = 'http://localhost:3000/personas';
  persona: Persona;
  constructor(
    private http: HttpClient) { }

  public getPersona (nombre: string): Observable<Persona> {
    console.log ('Busco a ' + nombre);
    console.log (this.APIUrl + nombre);
    return this.http.get<Persona>(this.APIUrl + '/' + nombre);
  }
  public BorrarPersona (nombre: string): Observable <void> {
    return this.http.delete<void> (this.APIUrl + '/' + nombre,
      { headers : new HttpHeaders ({ 'Content-Type' : 'application/json' })} );
  }

  public IncrementarPuntos (alumno: Persona): Observable <void> {
    alumno.puntos++;
    return this.http.put<void> (this.APIUrl + '/' + alumno.nombre, alumno,
      { headers : new HttpHeaders ({ 'Content-Type' : 'application/json' })} );
  }

  public putPersona (persona: Persona): Observable <void> {
    return this.http.put<void> (this.APIUrl + '/' + persona.nombre, persona,
      { headers : new HttpHeaders ({ 'Content-Type' : 'application/json' })} );
  }

  public AñadePersona (persona: Persona): Observable <void> {
    return this.http.post<void> (this.APIUrl , persona,
      { headers : new HttpHeaders ({ 'Content-Type' : 'application/json' })} );
  }

  public getTodos (): Observable<Persona []> {
    return this.http.get<Persona[]>(this.APIUrl);
  }


  // GetPersonas (): Observable<Persona[]> {
  //   return this.http.get<Persona[]>(this.APIUrl);
  // }
  // LeePersonas (): void {
  //   this.GetPersonas()
  //   .subscribe(lista => this.lista = lista);
  // }

  // DameLista (): Persona[] {
  //   return  this.lista;
  // }

  // damePersona(nombre: string): Persona {
  //   return this.lista.filter(persona => persona.nombre === nombre)[0];
  // }

  // Incrementar (nombre: string) {
  //   this.lista.filter(persona => persona.nombre === nombre)[0].puntos ++;
  // }

  // Eliminar (nombre: string): Persona [] {
  //   this.lista = this.lista.filter(persona => persona.nombre !== nombre);
  //   return this.lista;
  // }

  // OrdenarPuntos (): Persona [] {
  //   return this.lista.sort(function(obj1, obj2) {
  //     return obj1.puntos - obj2.puntos;
  //   });
  // }

  // PonPersona(persona: Persona): void {
  //   this.lista.push(persona);
  // }

  // Autentificar(nombre: string, pass: string): Persona {
  //   let user: Persona[] = [];
  //   user = this.lista.filter(persona => persona.nombre === nombre && persona.pass === pass );

  //   if (user.length === 0) {
  //     return null;
  //   } else {
  //     return user[0];
  //   }
  // }
}
