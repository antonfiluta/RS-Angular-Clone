import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OffersOverviewActions } from './offers-overview.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { OffersOverviewService } from '../services/offers-overview.service/offers-overview.service';

@Injectable()
export class OffersOverviewEffects {
  private readonly action$ = inject(Actions);
  private readonly offersOverviewService = inject(OffersOverviewService);

  public setOffersOverview = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadOffers),
      switchMap(() =>
        this.offersOverviewService.getOffersOverview().pipe(
          tap(() => console.log('work')),
          switchMap((offers) => of(OffersOverviewActions.loadOffersSuccess({ offers }))),
          catchError((error) => of(OffersOverviewActions.loadOffersFailure({ error }))),
        ),
      ),
    ),
  );
}
