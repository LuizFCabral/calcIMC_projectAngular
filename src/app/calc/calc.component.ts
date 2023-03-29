import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  altura: number = 0;
  peso: number = 0;
  imc!: number;
  result: string = '';
  visibility: boolean = false;

  getAlt(event: any) {
    this.altura = Number(event);
  }
  getPeso(event: any) {
    this.peso = Number(event);
  }

  show(bool: boolean) {
    this.visibility = bool;
  }

  calc() {
    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) this.result = 'Magreza';
    else if (this.imc < 24.9) this.result = 'Normal';
    else if (this.imc < 29.9) this.result = 'Sobrepeso';
    else if (this.imc < 34.9) this.result = 'Obesidade Grau 1';
    else if (this.imc < 39.9) this.result = 'Obesidade Grau 2';
    else if (this.imc >= 40) this.result = 'Obesidade Grau 3';

    this.show(true);
  }
}
