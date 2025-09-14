import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RouterState } from '@angular/router';
import { AuthState } from '../../features/auth/store/auth.state';
import { AuthFeature } from '../../features/auth/store/auth.reducer';
import { OffersOverviewState } from '../../features/offers-overview/store/offers-overview.state';
import { OffersOverviewFeature } from '../../features/offers-overview/store/offers-overview.reducer';
import { SpecificCityState } from '../../features/specific-city-offers/store/specific-city.state';
import { SpecificCityFeature } from '../../features/specific-city-offers/store/specific-city.reducer';

export interface AppState {
  auth: AuthState;
  offersOverview: OffersOverviewState;
  specificCity: SpecificCityState;
  router: RouterState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  [AuthFeature.name]: AuthFeature.reducer,
  [OffersOverviewFeature.name]: OffersOverviewFeature.reducer,
  [SpecificCityFeature.name]: SpecificCityFeature.reducer,
  router: routerReducer,
};
