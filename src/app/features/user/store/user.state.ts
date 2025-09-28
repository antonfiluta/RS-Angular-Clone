import { User } from '../../auth/models/auth.models';

export interface UserState {
  user: User | null;
}

export const initialUserState: UserState = {
  user: null,
};
