import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-upsert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-upsert.component.html',
  styleUrl: './user-upsert.component.scss',
})
export class UserUpsertComponent {
  @Input() user: IUser | null = null;
  @Output() userSubmit = new EventEmitter<IUser>();
  @Output() userCancel = new EventEmitter<void>();

  handleUser(): void {
    if (this.user) {
      this.userSubmit.emit(this.user);
    }
  }

  cancel(): void {
    this.userCancel.emit();
  }
}
