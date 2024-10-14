import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  isChecked: boolean = true;

  toggleTextVisibility() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
  }
}
