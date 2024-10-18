import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ApplicationRoutes } from '../../const/application-routes';
import { ICanComponentDeactivate } from '../../guards/can-leave.guard';

@Component({
  selector: 'app-upsert-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upsert-user.component.html',
  styleUrl: './upsert-user.component.scss',
})
export class UpsertUserComponent implements ICanComponentDeactivate, OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  user: IUser | undefined;
  originalUser: IUser | undefined;
  isEdit: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeUser();
  }

  canDeactivate(): boolean {
    if (this.userHasChanges()) {
      return confirm('You have unsaved changes.');
    }
    return true;
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
    this.isEdit = this.route.snapshot.data['isEdit'];

    if (this.isEdit) {
      this.user = this.userService.getUserById(
        Number(this.route.snapshot.params['id'])
      );
      this.originalUser = JSON.parse(JSON.stringify(this.user));
      return;
    }

    this.user = { id: 0, name: '', surname: '' };
    this.originalUser = JSON.parse(JSON.stringify(this.user));
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

  private userHasChanges(): boolean {
    if (this.user?.name !== this.originalUser?.name) {
      return true;
    }
    if (this.user?.surname !== this.originalUser?.surname) {
      return true;
    }

    return false;
  }
}
