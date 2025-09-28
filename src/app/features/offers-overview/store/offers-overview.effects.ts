import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OffersOverviewActions } from './offers-overview.actions';
import { catchError, of, switchMap } from 'rxjs';
import { OffersOverviewService } from '../services/offers-overview.service/offers-overview.service';
import { OffersTransformerService } from '../services/offers-transformer.service/offers-transformer-service';

@Injectable()
export class OffersOverviewEffects {
  private readonly action$ = inject(Actions);
  private readonly offersOverviewService = inject(OffersOverviewService);
  private readonly offersTransformerService = inject(OffersTransformerService);

  public setAllOffersOverview = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadAllOffers),
      switchMap(({ filters }) =>
        this.offersOverviewService.getRawOffers(filters).pipe(
          switchMap((rawOffers) => {
            const offers = this.offersTransformerService.getOfferOverview(rawOffers);
            return of(OffersOverviewActions.loadAllOffersSuccess({ offers }));
          }),
          catchError((error) => of(OffersOverviewActions.loadAllOffersFailure({ error }))),
        ),
      ),
    ),
  );

  public setSpecificFilterOffers = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadSpecificCityOffers),
      switchMap(({ filters }) =>
        this.offersOverviewService.getRawOffers(filters).pipe(
          switchMap((rawOffers) => {
            const offers = this.offersTransformerService.getOfferOverview(rawOffers).cities[0];
            return of(OffersOverviewActions.loadSpecificCityOffersSuccess({ response: offers }));
          }),
          catchError((error) => of(OffersOverviewActions.loadSpecificCityOffersFailure({ error }))),
        ),
      ),
    ),
  );

  public loadSpecificOffer = createEffect(() =>
    this.action$.pipe(
      ofType(OffersOverviewActions.loadSpecificOffer),
      switchMap(({ offerId }) =>
        this.offersOverviewService.getSpecificOffer(offerId).pipe(
          switchMap((rawOffer) => {
            const offer = this.offersTransformerService.transformApartmentToOffer(rawOffer);
            return of(OffersOverviewActions.loadSpecificOfferSuccess({ offer }));
          }),
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
