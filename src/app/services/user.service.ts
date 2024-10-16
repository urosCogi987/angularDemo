import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { LocalStorageConsts } from '../const/local-storage';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: IUser[] = [];

  constructor() {
    const usersJson = localStorage?.getItem(LocalStorageConsts.Users);

    if (usersJson) {
      this._users = JSON.parse(usersJson);
    }
  }

  addUser(user: IUser): void {
    const newUser = JSON.parse(JSON.stringify(user));
    newUser.id = this.getNextId();

    this._users.push(newUser);
    this.updateLocalStorage();
  }

  updateUser(user: IUser): void {
    const index = this.findUserIndex(user.id);
    if (index < 0) {
      return;
    }

    const updatedUser = JSON.parse(JSON.stringify(user));
    this._users[index] = updatedUser;
    this.updateLocalStorage();
  }

  deleteUser(userId: number): void {
    this._users = this._users.filter((x) => x.id != userId);
    this.updateLocalStorage();
  }

  getAllUsers(): IUser[] {
    return JSON.parse(JSON.stringify(this._users));
  }

  getUserById(userId: number): IUser | undefined {
    return this._users.find((user) => user.id === userId);
  }

  private getNextId(): number {
    return this._users.length > 0
      ? Math.max(...this._users.map((u) => u.id)) + 1
      : 1;
  }

  private findUserIndex(userId: number): number {
    return this._users.findIndex((u) => u.id === userId);
  }

  private updateLocalStorage(): void {
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }
}
