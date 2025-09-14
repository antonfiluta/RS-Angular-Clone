import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpecificCityState } from './specific-city.state';

const selectSpecificCityState = createFeatureSelector<SpecificCityState>('specificCity');

export const selectOffers = createSelector(
  selectSpecificCityState,
  (state: SpecificCityState) => state.offers,
);

export const selectCityName = createSelector(
  selectSpecificCityState,
  (state: SpecificCityState) => state.cityName,
);
