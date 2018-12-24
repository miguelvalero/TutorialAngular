import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  resultado: number;
  numero: number;
  constructor() {console.log ('Entro en constructor'); }
  ngOnInit() {
    console.log ('Entro en ngOnInit');
  }
  Duplicar (): void {
    console.log ('Entro en Duplicar');
    this.resultado = this.numero * 2;
  }
}
