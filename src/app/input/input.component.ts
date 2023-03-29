import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  value!: number;

  @Input() name!: string;

  @Output() sendValue = new EventEmitter();

  onChange() {
    this.sendValue.emit(this.value);
  }
}
