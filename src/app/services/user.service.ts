import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [
    {
      id: 0,
      name: 'Name1',
      surname: 'Surname1',
    },
    {
      id: 1,
      name: 'Name2',
      surname: 'Surname2',
    },
    {
      id: 2,
      name: 'Name3',
      surname: 'Surname3',
    },
    {
      id: 3,
      name: 'Name4',
      surname: 'Surname4',
    },
    {
      id: 4,
      name: 'Name5',
      surname: 'Surname5',
    },
    {
      id: 5,
      name: 'Name6',
      surname: 'Surname6',
    },
  ];

  constructor() {}

  getAllUsers(): IUser[] {
    return this.users;
  }
}
