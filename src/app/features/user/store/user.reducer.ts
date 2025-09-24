import { createFeature, createReducer, on } from '@ngrx/store';
import { initialUserState } from './user.state';
import { UserActions } from './user.actions';

export const UserFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialUserState,
    on(UserActions.loadUserSuccess, (state, { user }) => ({
      ...state,
      user,
    })),
    on(UserActions.loadUserFailure, (state, { error }) => ({
      ...state,
      error,
    })),
  ),
});
