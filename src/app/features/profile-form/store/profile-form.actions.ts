import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfileData } from '../models/profile-form.models';

export const ProfileActions = createActionGroup({
  source: 'Profile',
  events: {
    'Load Profile': emptyProps(),
    'Load Profile Success': props<{ profile: ProfileData }>(),
    'Load Profile Failure': props<{ error: HttpErrorResponse }>(),
  },
});
