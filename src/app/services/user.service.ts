import { Inject, Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { DOCUMENT } from '@angular/common';
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
    user.id = this.getNextId();

    this._users.push(user);
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  updateUser(user: IUser): void {
    const index = this.findUserIndex(user.id);
    if (index <= 0) {
      return;
    }

    this._users[index] = user;
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  deleteUser(userId: number): void {
    const index = this.findUserIndex(userId);
    if (index === -1) {
      return;
    }

    // this._users.splice(index, 1);
    // this._users = this._users.filter((x) => x.id != userId);
    const usersFiltered = this._users.filter((x) => x.id != userId);
    this._users = usersFiltered;
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  getAllUsers(): IUser[] {
    const usersCopy = this._users.map((user) => ({ ...user }));
    return usersCopy;
  }

  private getNextId(): number {
    return this._users.length > 0
      ? Math.max(...this._users.map((u) => u.id)) + 1
      : 1;
  }

  private findUserIndex(userId: number): number {
    return this._users.findIndex((u) => u.id === userId);
  }
}
