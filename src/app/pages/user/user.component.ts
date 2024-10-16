import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { Router, RouterModule } from '@angular/router';
import { ApplicationRoutes } from '../../const/application-routes';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizePipe, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  userUpdateRoute = `/${ApplicationRoutes.UpdateUser}`;
  userAddRoute = `/${ApplicationRoutes.AddUser}`;
  users: IUser[] = [];
  capitalizeNames: boolean = false;

  constructor() {
    this.users = this.userService.getAllUsers();
  }

  deleteUser(userId: number, event: Event): void {
    this.userService.deleteUser(userId);
    this.users = this.userService.getAllUsers();
    event.stopPropagation();
  }
}
