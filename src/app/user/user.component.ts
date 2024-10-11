import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userService: UserService = inject(UserService);
  users: IUser[] = [];
  selectedUser: IUser | null = null;
  capitalizeNames: boolean = false;

  constructor() {
    this.users = this.userService.getAllUsers();
  }

  selectUser(user: IUser): void {
    this.selectedUser = { ...user };
  }

  deselectUser(): void {
    this.selectedUser = null;
  }

  handleUser(): void {
    if (!this.isUserValid()) {
      return;
    }

    const index = this.findUserIndex();
    if (index === -1) {
      this.addUser();
      return;
    }

    this.updateUser(index);
  }

  initializeUser(): void {
    this.selectedUser = { id: -1, name: '', surname: '' };
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId);
    this.selectedUser = null;
  }

  private updateUser(index: number): void {
    this.users[index] = { ...this.selectedUser! };
    this.selectedUser = null;
  }

  private addUser(): void {
    this.selectedUser!.id = this.users.length;
    // logika za id u userService
    this.userService.addUser(this.selectedUser!);
    this.selectedUser = null;
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

  private findUserIndex(): number {
    return this.users.findIndex((user) => user.id == this.selectedUser?.id);
  }
}
