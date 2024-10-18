import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApplicationRoutes } from './const/application-routes';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appRoutes = ApplicationRoutes;
  isChecked: boolean = JSON.parse(localStorage.getItem('isChecked') || 'false');

  toggleSecureAccess() {
    this.isChecked = !this.isChecked;
    localStorage.setItem('isChecked', JSON.stringify(this.isChecked));
  }
}
