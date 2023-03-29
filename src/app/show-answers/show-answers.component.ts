import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-answers',
  templateUrl: './show-answers.component.html',
  styleUrls: ['./show-answers.component.css'],
})
export class ShowAnswersComponent {
  @Input() result: string = '';
  color: string = '';

  setColor() {
    if (this.result === 'Normal') return '#3BFA2D';
    else if (this.result === 'Sobrepeso') return '#E0C51E';
    else return '#D51A18';
  }
}
