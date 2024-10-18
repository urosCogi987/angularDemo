import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isChecked = JSON.parse(localStorage.getItem('isChecked') || 'false');
  if (!isChecked) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
