import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../auth/models/auth.models';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': props<{ user: User }>(),
    'Load User Failure': props<{ error: HttpErrorResponse }>(),

    'Edit User': props<{ user: User }>(),
    'Update User': props<{ id: string }>(),
  },
});
