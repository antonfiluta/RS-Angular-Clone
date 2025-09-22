import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth-service';
import { AuthActions } from './auth.actions';
import { LocalStorage } from '../../../core/services/local-storage-service/local-storage';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private readonly action$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly localStorage = inject(LocalStorage);
  private readonly router = inject(Router);

  public loginEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginUser),
      switchMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          switchMap((token) => of(AuthActions.authSuccess({ token }))),
          catchError((error) => of(AuthActions.loginUserFailure({ error }))),
        ),
      ),
    ),
  );

  public registerEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.registerUser),
      switchMap(({ credentials }) =>
        this.authService.register(credentials).pipe(
          switchMap((token) => of(AuthActions.authSuccess({ token }))),
          catchError((error) => of(AuthActions.registerUserFailure({ error }))),
        ),
      ),
    ),
  );

  public authSuccessEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.authSuccess),
      switchMap(({ token }) => {
        this.localStorage.setItem('token', token);
        this.router.navigate(['/']);
        return of(AuthActions.initUserSession({ token }));
      }),
    ),
  );
}
