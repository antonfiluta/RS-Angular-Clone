import { ProfileData } from '../models/profile-form.models';

export interface ProfileState {
  profile: ProfileData | null;
}

export const initialProfileState: ProfileState = {
  profile: null,
};
