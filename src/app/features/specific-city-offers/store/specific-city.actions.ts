import { createActionGroup, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SpecificCityState } from './specific-city.state';

export const SpecificCityActions = createActionGroup({
  source: 'Specific City',
  events: {
    'Load City': props<{ cityName: string }>(),
    'Load City Success': props<{ response: SpecificCityState }>(),
    'Load City Failure': props<{ error: HttpErrorResponse }>(),
  },
});
