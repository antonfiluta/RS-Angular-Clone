import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../../features/auth/store/auth.selector';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);
  const isAuthenticated = store.selectSignal(selectIsAuthenticated);

  if (!isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['']);
};
