import { Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ParentComponent } from './pages/parent/parent.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationRoutes } from './const/application-routes';
import { UserComponent } from './pages/user/user.component';
import { UserUpsertComponent } from './pages/user-upsert/user-upsert.component';

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
    path: `${ApplicationRoutes.UsersUpsert}/:id`,
    component: UserUpsertComponent,
    title: 'User upsert',
  },
  { path: '**', component: HomeComponent },
];
