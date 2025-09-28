import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../features/auth/store/auth.state';
import { AuthActions } from '../../features/auth/store/auth.actions';

export const ErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const state = inject(Store<AuthState>);

  return next(request).pipe(
    catchError((error) => {
      if (error.status === 401) {
        state.dispatch(AuthActions.logoutUser());
      }
      return throwError(() => error);
    }),
  );
};
