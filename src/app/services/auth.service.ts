import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: boolean = false;

  toggleStatus(): void {
    this._isAuthenticated = !this._isAuthenticated;
  }

  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
