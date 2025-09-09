import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RouterState } from '@angular/router';
import { AuthState } from '../../features/auth/store/auth.state';
import { AuthFeature } from '../../features/auth/store/auth.reducer';
import { OffersOverviewState } from '../../features/offers-overview/store/offers-overview.state';
import { OffersOverviewFeature } from '../../features/offers-overview/store/offers-overview.reducer';

export interface AppState {
  auth: AuthState;
  offersOverview: OffersOverviewState;
  router: RouterState;
}

export const reducers: ActionReducerMap<AppState> = {
  [AuthFeature.name]: AuthFeature.reducer,
  [OffersOverviewFeature.name]: OffersOverviewFeature.reducer,
  router: routerReducer,
};
