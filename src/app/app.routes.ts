import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'parent', component: ParentComponent, title: 'Parent' },
  { path: 'details', component: DetailsComponent, title: 'Details' },
];
