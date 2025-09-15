import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OffersOverviewState } from './offers-overview.state';

const selectOverviewState = createFeatureSelector<OffersOverviewState>('offersOverview');

export const selectOffers = createSelector(
  selectOverviewState,
  (state: OffersOverviewState) => state.offers,
);
