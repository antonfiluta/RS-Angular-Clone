import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OffersOverviewState } from './offers-overview.state';
import { basicOffer } from '../../../shared/utils/data/basic-offer';

const selectOverviewState = createFeatureSelector<OffersOverviewState>('offersOverview');

export const selectAllOffers = createSelector(
  selectOverviewState,
  (state: OffersOverviewState) => state.offers,
);

export const selectSpecificCityOffers = createSelector(
  selectOverviewState,
  (state: OffersOverviewState) => state.specificCityOffers?.offers ?? [],
);

export const selectCityName = createSelector(
  selectOverviewState,
  (state: OffersOverviewState) => state.specificCityOffers?.name ?? '',
);

export const selectSpecificOffer = createSelector(
  selectOverviewState,
  (state: OffersOverviewState) => state.specificOffer ?? basicOffer,
);
