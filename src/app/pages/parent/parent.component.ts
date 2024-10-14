import { Component } from '@angular/core';
import { ChildComponent } from '../../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  mirroredValue: string = '';
  childValue: string = '';

  updateValue(value: string) {
    this.childValue = value;
  }
}
