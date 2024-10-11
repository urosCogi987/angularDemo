import { Inject, Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { DOCUMENT } from '@angular/common';
import { LocalStorageConsts } from '../const/local-storage';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: IUser[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = this.getLocalStorage();
    const usersJson = localStorage?.getItem(LocalStorageConsts.Users);

    if (usersJson) {
      this._users = JSON.parse(usersJson);
    }
  }

  addUser(user: IUser): void {
    const localStorage = this.getLocalStorage();

    user.id = this.getNextId();

    this._users.push(user);
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  updateUser(user: IUser): void {
    const index = this.findUserIndex(user.id);
    if (index === -1) {
      return;
    }

    this._users[index] = user;
    const localStorage = this.getLocalStorage();
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

    this._users.splice(index, 1);
    const localStorage = this.getLocalStorage();
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  getAllUsers(): IUser[] {
    return this._users;
  }

  private getLocalStorage(): Storage | null {
    return this.document.defaultView?.localStorage || null;
  }

  private getNextId(): number {
    return this._users.length > 0
      ? Math.max(...this._users.map((u) => u.id)) + 1
      : 0;
  }

  private findUserIndex(userId: number): number {
    return this._users.findIndex((u) => u.id === userId);
  }
}
