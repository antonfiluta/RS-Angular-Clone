import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAccessToken } from '../../features/auth/store/auth.selector';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const store = inject(Store);
  const token = store.selectSignal(selectAccessToken);

  if (token()) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token()}`,
      },
    });
  }

  return next(request);
};
