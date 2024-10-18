import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ApplicationRoutes } from '../../const/application-routes';
import { CanComponentDeactivate } from '../../guards/can-leave.guard';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-upsert-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upsert-user.component.html',
  styleUrl: './upsert-user.component.scss',
})
export class UpsertUserComponent implements CanComponentDeactivate {
  route: ActivatedRoute = inject(ActivatedRoute);
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  user: IUser | undefined;
  isEdit: boolean = false;
  private hasUnsavedChanges: boolean = false;

  constructor() {
    this.initializeUser();
  }

  onInputChange(): void {
    this.hasUnsavedChanges = true;
  }

  canDeactivate(): boolean {
    console.log('method called.');
    if (this.hasUnsavedChanges) {
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
