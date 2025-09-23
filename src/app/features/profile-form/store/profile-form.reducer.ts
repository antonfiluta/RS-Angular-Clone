import { createFeature, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './profile-form.actions';
import { initialProfileState } from './profile-form.state';

export const ProfileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    initialProfileState,
    on(ProfileActions.loadProfileSuccess, (state, { profile }) => ({
      ...state,
      profile,
    })),
    on(ProfileActions.loadProfileFailure, (state, { error }) => ({
      ...state,
      error,
    })),
  ),
});
