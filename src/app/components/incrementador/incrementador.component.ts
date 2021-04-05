import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;

    console.log(this.progreso);
  }

  /*@Input('valorInicialProgreso') progreso: number = 50; 
    Si se necesita renombrar progreso se coloca el nuevo nombre
    entre comillas. Ver HTML
  */
  @Input() progreso: number = 50;


  // Las clases que se pueden utilizar son :
  // btn-warning : color amarillo
  // btn-danger : color rojo
  // btn-info : color azul
  // Por defecto btn-primary es de color morado para este tema
  @Input() btnClass: string = 'btn-primary';
  @Input() intervalo: number = 5;


  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(vlrIntervalo: number) {

    console.log(this.progreso + ' :: ' + this.intervalo + ' :: ' + vlrIntervalo);


    if (this.progreso >= 100 && vlrIntervalo >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && vlrIntervalo < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + vlrIntervalo;
    this.valorSalida.emit(this.progreso);
  }

  cambiarValorInput(nuevoValor: number) {

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }

}
