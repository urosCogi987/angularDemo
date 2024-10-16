import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IUser } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ApplicationRoutes } from '../../const/application-routes';

@Component({
  selector: 'app-upsert-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upsert-user.component.html',
  styleUrl: './upsert-user.component.scss',
})
export class UpsertUserComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  user: IUser | undefined;

  constructor() {
    this.initializeUser();
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

  private initializeUser(): void {
    const userId = Number(this.route.snapshot.params['id']);
    if (userId) {
      this.user = this.userService.getUserById(userId);
      return;
    }

    this.user = { id: -1, name: '', surname: '' };
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
}
