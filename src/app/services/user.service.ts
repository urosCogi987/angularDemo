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
    const localStorage = this.document.defaultView?.localStorage;
    const usersJson = localStorage?.getItem(LocalStorageConsts.Users);

    if (usersJson) {
      this._users = JSON.parse(usersJson);
    }
  }

  addUser(user: IUser): void {
    const localStorage = this.document.defaultView?.localStorage;

    this._users.push(user);
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  updateUser(user: IUser): void {
    const index = this._users.findIndex((u) => u.id === user.id);
    if (index === -1) {
      return;
    }

    this._users[index] = user;
    const localStorage = this.document.defaultView?.localStorage;
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  deleteUser(userId: number): void {
    const index = this._users.findIndex((u) => u.id === userId);
    if (index === -1) {
      return;
    }

    this._users.splice(index, 1);
    const localStorage = this.document.defaultView?.localStorage;
    localStorage?.setItem(
      LocalStorageConsts.Users,
      JSON.stringify(this._users)
    );
  }

  getAllUsers(): IUser[] {
    return this._users;
  }
}
