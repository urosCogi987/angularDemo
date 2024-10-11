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

  selectUser(user: IUser): void {
    this.selectedUser = { ...user };
    this.isAdding = false;
  }

  handleUser(): void {
    if (!this.isUserValid()) {
      return;
    }

    if (this.isAdding) {
      this.addUser();
      return;
    }

    this.updateUser();
  }

  private updateUser(): void {
    const index = this.users.findIndex(
      (user) => user.id == this.selectedUser?.id
    );
    if (index !== -1) {
      this.users[index] = { ...this.selectedUser! };
      this.selectedUser = null;
    }
  }

  private addUser(): void {
    this.selectedUser!.id = this.users.length;
    this.users.push({ ...this.selectedUser! });
    this.selectedUser = null;
    this.isAdding = false;
  }

  private isUserValid(): boolean {
    if (!this.selectedUser?.name) {
      return false;
    }
    if (!this.selectedUser?.surname) {
      return false;
    }

    return true;
  }

  startAdding(): void {
    this.isAdding = true;
    this.selectedUser = { id: 0, name: '', surname: '' };
  }

  constructor() {
    this.users = this.userService.getAllUsers();
  }
}
