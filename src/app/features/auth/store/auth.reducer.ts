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
    on(AuthActions.loginUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(AuthActions.registerUser, (state) => ({
      ...state,
      error: null,
    })),
    on(AuthActions.registerUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),

    on(AuthActions.authSuccess, (state, { tokens }) => ({
      ...state,
      tokens,
    })),
    on(AuthActions.initUserSession, (state) => ({
      ...state,
      isAuthenticated: true,
      error: null,
    })),
    on(AuthActions.logoutUser, (state) => ({
      ...state,
      tokens: null,
      isAuthenticated: false,
      error: null,
    })),
  ),
});
