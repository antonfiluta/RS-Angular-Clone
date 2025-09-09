import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginCredentials, SignUpCredentials } from '../models/auth.models';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login User': props<{ credentials: LoginCredentials }>(),
    'Login User Success': props<{ token: string }>(),
    'Login User Failure': props<{ error: HttpErrorResponse }>(),

    'Register User': props<{ credentials: SignUpCredentials }>(),
    'Register User Success': props<{ token: string }>(),
    'Register User Failure': props<{ error: HttpErrorResponse }>(),

    'Logout User': emptyProps,
    'Init User Session': props<{ token: string }>(),
  },
});
