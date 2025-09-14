import { createFeature, createReducer, on } from '@ngrx/store';
import { initialSpecificCityState } from './specific-city.state';
import { SpecificCityActions } from './specific-city.actions';

export const SpecificCityFeature = createFeature({
  name: 'specificCity',
  reducer: createReducer(
    initialSpecificCityState,
    on(SpecificCityActions.loadCitySuccess, (state, { response }) => ({
      ...state,
      offers: response.offers,
      cityName: response.cityName,
    })),
  ),
});
