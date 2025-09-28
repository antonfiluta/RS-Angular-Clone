import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { UserActions } from './user.actions';
import { UserService } from '../services/profile-service/profile-service';
import { LocalStorage } from '../../../core/services/local-storage-service/local-storage';
import { AuthResponse } from '../../auth/models/auth.models';

@Injectable()
export class UserEffects {
  private readonly action$ = inject(Actions);
  private readonly userService = inject(UserService);
  private readonly localStorage = inject(LocalStorage);

  public editUserEffect = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.editUser),
      switchMap(({ user }) =>
        this.userService.editUser(user).pipe(
          switchMap(() => of(UserActions.updateUser({ id: user._id }))),
          catchError((error) => of(UserActions.loadUserFailure({ error }))),
        ),
      ),
    ),
  );

  public updateUserEffect = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.updateUser),
      switchMap(({ id }) =>
        this.userService.loadUser(id).pipe(
          switchMap((updateUser) => {
            const authData = this.localStorage.getItem<AuthResponse>('user');
            if (authData) authData.user = updateUser;
            this.localStorage.setItem('user', authData);

            return of(UserActions.loadUser({ user: updateUser }));
          }),
          catchError((error) => of(UserActions.loadUserFailure({ error }))),
        ),
      ),
    ),
  );
}
