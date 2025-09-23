import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { ProfileService } from '../services/profile-service/profile-service';
import { ProfileActions } from './profile-form.actions';

@Injectable()
export class ProfileEffects {
  private readonly action$ = inject(Actions);
  private readonly profileService = inject(ProfileService);

  public loadProfileEffect = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.loadProfile),
      switchMap(() =>
        this.profileService.loadProfile().pipe(
          switchMap((profile) => of(ProfileActions.loadProfileSuccess({ profile }))),
          catchError((error) => of(ProfileActions.loadProfileFailure({ error }))),
        ),
      ),
    ),
  );
}
