import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponse, LoginCredentials, SignUpCredentials } from '../models/auth.models';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login User': props<{ credentials: LoginCredentials }>(),
    'Login User Failure': props<{ error: HttpErrorResponse }>(),

    'Register User': props<{ credentials: SignUpCredentials }>(),
    'Register User Failure': props<{ error: HttpErrorResponse }>(),

    'Auth Success': props<{ authResponse: AuthResponse }>(),

    'Logout User': emptyProps,
    'Init User Session': props<{ authResponse: AuthResponse }>(),
  },
});
