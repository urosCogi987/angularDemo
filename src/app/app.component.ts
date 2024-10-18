import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApplicationRoutes } from './const/application-routes';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  isChecked: boolean = false;
  appRoutes = ApplicationRoutes;

  ngOnInit(): void {
    this.isChecked = this.authService.isAuthenticated();
  }

  toggleSecureAccess() {
    this.isChecked = !this.isChecked;
    this.authService.toggleStatus();
  }
}
