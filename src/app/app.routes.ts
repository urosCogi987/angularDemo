import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { ApplicationRoutes } from './const/application-routes';

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
  { path: '**', component: HomeComponent },
];
