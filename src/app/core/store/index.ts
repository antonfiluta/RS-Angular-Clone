import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RouterState } from '@angular/router';
import { AuthState } from '../../features/auth/store/auth.state';
import { AuthFeature } from '../../features/auth/store/auth.reducer';
import { OffersOverviewState } from '../../features/offers-overview/store/offers-overview.state';
import { OffersOverviewFeature } from '../../features/offers-overview/store/offers-overview.reducer';
import { ProfileFeature } from '../../features/profile-form/store/profile-form.reducer';
import { ProfileState } from '../../features/profile-form/store/profile-form.state';

export interface AppState {
  auth: AuthState;
  offersOverview: OffersOverviewState;
  profile: ProfileState;
  router: RouterState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  [AuthFeature.name]: AuthFeature.reducer,
  [OffersOverviewFeature.name]: OffersOverviewFeature.reducer,
  [ProfileFeature.name]: ProfileFeature.reducer,
  router: routerReducer,
};
