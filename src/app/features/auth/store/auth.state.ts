import { HttpErrorResponse } from '@angular/common/http';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  error: HttpErrorResponse | null;
}

export const initialAuthState: AuthState = {
  token: null,
  isAuthenticated: false,
  error: null,
};
