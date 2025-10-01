import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RouterState } from '@angular/router';
import { AuthState } from '../../features/auth/store/auth.state';
import { AuthFeature } from '../../features/auth/store/auth.reducer';
import { OffersOverviewState } from '../../features/offers-overview/store/offers-overview.state';
import { OffersOverviewFeature } from '../../features/offers-overview/store/offers-overview.reducer';
import { UserState } from '../../features/user/store/user.state';
import { UserFeature } from '../../features/user/store/user.reducer';

export interface AppState {
  auth: AuthState;
  user: UserState;
  offersOverview: OffersOverviewState;
  router: RouterState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  [AuthFeature.name]: AuthFeature.reducer,
  [UserFeature.name]: UserFeature.reducer,
  [OffersOverviewFeature.name]: OffersOverviewFeature.reducer,
  router: routerReducer,
};
