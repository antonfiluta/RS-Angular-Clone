import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (authState) => authState.isAuthenticated,
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (authState) => authState.tokens?.accessToken,
);

export const selectRefreshToken = createSelector(
  selectAuthState,
  (authState) => authState.tokens?.refreshToken,
);
