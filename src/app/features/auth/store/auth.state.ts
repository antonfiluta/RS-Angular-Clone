import { HttpErrorResponse } from '@angular/common/http';
import { TokensModel } from '../models/auth.models';

export interface AuthState {
  tokens: TokensModel | null;
  isAuthenticated: boolean;
  error: HttpErrorResponse | null;
}

export const initialAuthState: AuthState = {
  tokens: null,
  isAuthenticated: false,
  error: null,
};
