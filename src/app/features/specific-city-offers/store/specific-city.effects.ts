import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { SpecificCityActions } from './specific-city.actions';
import { SpecificCityService } from '../services/specific-city.service/specific-city.service';

@Injectable()
export class SpecificCityEffects {
  private readonly action$ = inject(Actions);
  private readonly specificCityService = inject(SpecificCityService);

  public setCity = createEffect(() =>
    this.action$.pipe(
      ofType(SpecificCityActions.loadCity),
      switchMap(({ cityName }) =>
        this.specificCityService.getCity(cityName).pipe(
          switchMap((response) => of(SpecificCityActions.loadCitySuccess({ response }))),
          catchError((error) => of(SpecificCityActions.loadCityFailure({ error }))),
        ),
      ),
    ),
  );
}
