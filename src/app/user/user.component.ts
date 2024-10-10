import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userService: UserService = inject(UserService);
  users: IUser[] = [];
  selectedUser: IUser | null = null;
  isAdding: boolean = false;
  newUser: IUser = { id: 0, name: '', surname: '' };

  selectUser(user: IUser) {
    this.selectedUser = { ...user };
    this.isAdding = false;
  }

  updateUser() {
    if (this.selectedUser) {
      const index = this.users.findIndex(
        (user) => user.id === this.selectedUser?.id
      );
      if (index !== -1) {
        this.users[index] = { ...this.selectedUser };
        this.selectedUser = null;
      }
    }
  }

  addUser() {
    if (this.newUser.name && this.newUser.surname) {
      this.newUser.id = this.users.length;
      this.users.push({ ...this.newUser });
      this.newUser = { id: 0, name: '', surname: '' };
      this.isAdding = false;
    }
  }

  startAdding() {
    this.isAdding = true;
    this.selectedUser = null;
  }

  constructor() {
    this.users = this.userService.getAllUsers();
  }
}
