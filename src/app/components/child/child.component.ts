import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  inputValue: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  onButtonClick() {
    this.valueChanged.emit(this.inputValue);
  }
}
