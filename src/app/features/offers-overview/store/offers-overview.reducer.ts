import { createFeature, createReducer, on } from '@ngrx/store';
import { initialOffersOverviewState } from './offers-overview.state';
import { OffersOverviewActions } from './offers-overview.actions';

export const OffersOverviewFeature = createFeature({
  name: 'offersOverview',
  reducer: createReducer(
    initialOffersOverviewState,
    on(OffersOverviewActions.loadAllOffersSuccess, (state, { offers }) => ({
      ...state,
      offers,
    })),
    on(OffersOverviewActions.loadSpecificCityOffersSuccess, (state, { response }) => ({
      ...state,
      specificCityOffers: response,
    })),
    on(OffersOverviewActions.loadSpecificOfferSuccess, (state, { offer }) => ({
      ...state,
      specificOffer: offer,
    })),
    on(OffersOverviewActions.toggleOfferLikeSuccess, (state, { offer }) => ({
      ...state,
      specificOffer: offer,
    })),
  ),
});
