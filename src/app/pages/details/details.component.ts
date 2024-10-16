import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverColorChangeDirective } from '../../directives/hover-color-change.directive';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CommonModule, HoverColorChangeDirective],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  isChecked: boolean = true;

  toggleTextVisibility() {
    this.isChecked = !this.isChecked;
  }
}
