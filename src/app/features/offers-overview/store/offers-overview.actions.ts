import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { OffersOverview } from '../models/offers-overview.models';

export const OffersOverviewActions = createActionGroup({
  source: 'Offers Overview',
  events: {
    'Load Offers': emptyProps(),
    'Load Offers Success': props<{ offers: OffersOverview }>(),
    'Load Offers Failure': props<{ error: HttpErrorResponse }>(),
  },
});
