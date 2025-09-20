import { createFeature, createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { AuthActions } from './auth.actions';

export const AuthFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialAuthState,
    on(AuthActions.loginUser, (state) => ({
      ...state,
      error: null,
    })),
    on(AuthActions.loginUserSuccess, (state, { token }) => ({
      ...state,
      isAuthenticated: true,
      token,
    })),
    on(AuthActions.loginUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(AuthActions.registerUser, (state) => ({
      ...state,
      error: null,
    })),
    on(AuthActions.registerUserSuccess, (state, { token }) => ({
      ...state,
      isAuthenticated: true,
      token,
    })),
    on(AuthActions.registerUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),
    on(AuthActions.logoutUser, (state) => ({
      ...state,
      token: null,
      isAuthenticated: false,
      error: null,
    })),
    on(AuthActions.initUserSession, (state, { token }) => ({
      ...state,
      isAuthenticated: true,
      token,
      error: null,
    })),
  ),
});
