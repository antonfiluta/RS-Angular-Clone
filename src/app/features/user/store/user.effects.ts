import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { UserActions } from './user.actions';
import { UserService } from '../services/profile-service/profile-service';
import { User } from '../models/profile-form.models';

@Injectable()
export class UserEffects {
  private readonly action$ = inject(Actions);
  private readonly userService = inject(UserService);

  public loadUserEffect = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.loadUser),
      switchMap(() =>
        this.userService.loadUser().pipe(
          switchMap((user: User) => of(UserActions.loadUserSuccess({ user }))),
          catchError((error) => of(UserActions.loadUserFailure({ error }))),
        ),
      ),
    ),
  );

  public editUserEffect = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.editUser),
      switchMap(({ user }) =>
        this.userService.editUser(user).pipe(
          switchMap((user: User) => of(UserActions.loadUserSuccess({ user }))),
          catchError((error) => of(UserActions.loadUserFailure({ error }))),
        ),
      ),
    ),
  );
}
