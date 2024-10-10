import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApplicationRoutes } from './const/application-routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appRoutes = ApplicationRoutes;
}
