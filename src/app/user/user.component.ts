import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { UserUpsertComponent } from '../user-upsert/user-upsert.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizePipe, UserUpsertComponent],
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

  handleUser(user: IUser): void {
    if (!this.isUserValid()) {
      return;
    }

    const index = this.findUserIndex();
    if (index <= 0) {
      this.addUser(user);
      return;
    }

    this.updateUser(user, index);
  }

  initializeUser(): void {
    this.selectedUser = { id: -1, name: '', surname: '' };
  }

  deleteUser(userId: number, event: Event): void {
    this.userService.deleteUser(userId);
    this.selectedUser = null;
    this.users = this.userService.getAllUsers();
    event.stopPropagation();
  }

  private updateUser(user: IUser, index: number): void {
    this.users[index] = { ...user };
    this.userService.updateUser(this.users[index]);
    this.users = this.userService.getAllUsers();
    this.selectedUser = null;
  }

  private addUser(user: IUser): void {
    this.userService.addUser(user);
    this.users = this.userService.getAllUsers();
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
