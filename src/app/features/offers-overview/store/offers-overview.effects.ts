import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OffersOverviewActions } from './offers-overview.actions';
import { catchError, of, switchMap, tap } from 'rxjs';
import { OffersOverviewService } from '../services/offers-overview.service/offers-overview.service';

@Injectable()
export class OffersOverviewEffects {
  private readonly action$ = inject(Actions);
  private readonly offersOverviewService = inject(OffersOverviewService);

  public setAllOffersOverview = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadAllOffers),
      switchMap(() =>
        this.offersOverviewService.getOffersOverview().pipe(
          tap((offers) => console.log(offers)),
          switchMap((offers) => of(OffersOverviewActions.loadAllOffersSuccess({ offers }))),
          catchError((error) => of(OffersOverviewActions.loadAllOffersFailure({ error }))),
        ),
      ),
    ),
  );

  public setSpecificCityOffers = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadSpecificCityOffers),
      switchMap(({ cityId }) =>
        this.offersOverviewService.getSpecificCityOffers(cityId).pipe(
          switchMap((response) =>
            of(OffersOverviewActions.loadSpecificCityOffersSuccess({ response })),
          ),
          catchError((error) => of(OffersOverviewActions.loadSpecificCityOffersFailure({ error }))),
        ),
      ),
    ),
  );

  public loadSpecificOffer = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadSpecificOffer),
      switchMap(({ cityId, offerId }) =>
        this.offersOverviewService.getSpecificOffer(cityId, offerId).pipe(
          switchMap((offer) => of(OffersOverviewActions.loadSpecificOfferSuccess({ offer }))),
          catchError((error) => of(OffersOverviewActions.loadSpecificOfferFailure({ error }))),
        ),
      ),
    ),
  );

  public toggleOfferLike = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.toggleOfferLike),
      switchMap(({ cityId, offerId, isLiked }) =>
        this.offersOverviewService.toggleOfferLike(cityId, offerId, isLiked).pipe(
          switchMap((offer) => of(OffersOverviewActions.toggleOfferLikeSuccess({ cityId, offer }))),
          catchError((error) => of(OffersOverviewActions.toggleOfferLikeFailure({ error }))),
        ),
      ),
    ),
  );
}
