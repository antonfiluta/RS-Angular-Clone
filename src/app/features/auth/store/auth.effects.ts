import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth-service';
import { AuthActions } from './auth.actions';
import { LocalStorage } from '../../../core/services/local-storage-service/local-storage';
import { Router } from '@angular/router';
import { LogoutChecker } from '../services/logout-checker/logout-checker';

@Injectable()
export class AuthEffects {
  private readonly action$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly localStorage = inject(LocalStorage);
  private readonly router = inject(Router);
  private readonly logoutChecker = inject(LogoutChecker);

  public loginEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.loginUser),
      switchMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          switchMap((tokens) => of(AuthActions.authSuccess({ tokens }))),
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
          switchMap((tokens) => of(AuthActions.authSuccess({ tokens }))),
          catchError((error) => of(AuthActions.registerUserFailure({ error }))),
        ),
      ),
    ),
  );

  public authSuccessEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.authSuccess),
      switchMap(({ tokens }) => {
        this.localStorage.setItem('tokens', tokens);
        this.router.navigate(['/']);
        return of(AuthActions.initUserSession({ token: tokens.accessToken }));
      }),
    ),
  );

  // public initUserSessionEffect = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(AuthActions.initUserSession),
  //     switchMap(() => {
  //       return of(UserActions.loadUser());
  //     }),
  //   ),
  // );

  public logoutEffect = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthActions.logoutUser),
        tap(() => {
          this.logoutChecker.checkRoute();
          this.localStorage.removeItem('tokens');
        }),
      ),
    { dispatch: false },
  );
}
