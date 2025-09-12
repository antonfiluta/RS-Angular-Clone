import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { OffersOverviewModel } from '../models/offers-overview.models';

export const OffersOverviewActions = createActionGroup({
  source: 'Offers Overview',
  events: {
    'Load Offers': emptyProps(),
    'Load Offers Success': props<{ offers: OffersOverviewModel }>(),
    'Load Offers Failure': props<{ error: HttpErrorResponse }>(),
  },
});
