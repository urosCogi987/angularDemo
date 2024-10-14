import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IUser } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ApplicationRoutes } from '../../const/application-routes';

@Component({
  selector: 'app-user-upsert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-upsert.component.html',
  styleUrl: './user-upsert.component.scss',
})
export class UserUpsertComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  user: IUser | undefined;

  constructor() {
    this.initializeUser();
  }

  private initializeUser(): void {
    const userId = Number(this.route.snapshot.params['id']);
    if (userId) {
      this.user = this.userService.getUserById(userId);
      return;
    }

    this.user = { id: -1, name: '', surname: '' };
  }

  cancel(): void {
    this.router.navigate([`${ApplicationRoutes.Users}`]);
  }

  handleUser(user: IUser, isNewUser: boolean): void {
    if (!this.isUserValid(user)) {
      return;
    }

    if (isNewUser) {
      this.userService.addUser(user);
    } else {
      this.userService.updateUser(user);
    }

    this.router.navigate([`${ApplicationRoutes.Users}`]);
  }

  private isUserValid(user: IUser): boolean {
    if (!user.name) {
      return false;
    }
    if (!user.surname) {
      return false;
    }

    return true;
  }

  // private updateUser(user: IUser): void {
  //   this.userService.updateUser(user);
  //   this.router.navigate([`${ApplicationRoutes.Users}`]);
  // }

  // private addUser(user: IUser): void {
  //   this.userService.addUser(user);
  //   this.users = this.userService.getAllUsers();
  //   this.selectedUser = null;
  // }
}
