import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ParentComponent } from './pages/parent/parent.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationRoutes } from './const/application-routes';
import { UserComponent } from './pages/user/user.component';
import { SecureComponent } from './pages/secure/secure.component';
import { authGuard } from './guards/auth.guard';
import { canDeactivateGuard } from './guards/can-leave.guard';
import { Component } from '@angular/core';
import { UpsertUserComponent } from './components/upsert-user/upsert-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: ApplicationRoutes.Parent,
    component: ParentComponent,
    title: 'Parent',
  },
  {
    path: ApplicationRoutes.Details,
    component: DetailsComponent,
    title: 'Details',
  },
  {
    path: ApplicationRoutes.Users,
    component: UserComponent,
    title: 'Users',
  },
  {
    path: `${ApplicationRoutes.AddUser}`,
    component: UpsertUserComponent,
    title: 'Add user',
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: `${ApplicationRoutes.UpdateUser}/:id`,
    component: UpsertUserComponent,
    data: {
      isEdit: true,
    },
    title: 'Update user',
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: `${ApplicationRoutes.Secure}`,
    component: SecureComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: HomeComponent },
];
