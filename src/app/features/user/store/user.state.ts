import { User } from '../models/profile-form.models';

export interface UserState {
  user: User | null;
}

export const initialUserState: UserState = {
  user: null,
};
