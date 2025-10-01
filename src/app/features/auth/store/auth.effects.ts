import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth-service/auth-service';
import { AuthActions } from './auth.actions';
import { LocalStorage } from '../../../core/services/local-storage-service/local-storage';
import { Router } from '@angular/router';
import { LogoutChecker } from '../services/logout-checker/logout-checker';
import { UserActions } from '../../user/store/user.actions';

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
          switchMap((authResponse) => of(AuthActions.authSuccess({ authResponse }))),
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
          switchMap((authResponse) => of(AuthActions.authSuccess({ authResponse }))),
          catchError((error) => of(AuthActions.registerUserFailure({ error }))),
        ),
      ),
    ),
  );

  public authSuccessEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.authSuccess),
      switchMap(({ authResponse }) => {
        this.localStorage.setItem('user', authResponse);
        this.router.navigate(['/']);
        return of(AuthActions.initUserSession({ authResponse }));
      }),
    ),
  );

  public initUserSessionEffect = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.initUserSession),
      switchMap(({ authResponse }) => of(UserActions.loadUser({ user: authResponse.user }))),
    ),
  );

  public logoutEffect = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthActions.logoutUser),
        tap(() => {
          this.logoutChecker.checkRoute();
          this.localStorage.removeItem('user');
        }),
      ),
    { dispatch: false },
  );
}
