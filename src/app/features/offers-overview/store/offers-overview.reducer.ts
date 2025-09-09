import { createFeature, createReducer, on } from '@ngrx/store';
import { initialOffersOverviewState } from './offers-overview.state';
import { OffersOverviewActions } from './offers-overview.actions';

export const OffersOverviewFeature = createFeature({
  name: 'offersOverview',
  reducer: createReducer(
    initialOffersOverviewState,
    on(OffersOverviewActions.loadOffersSuccess, (state, { offers }) => ({
      ...state,
      offers,
    })),
  ),
});
