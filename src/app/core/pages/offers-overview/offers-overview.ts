import { Component, inject } from '@angular/core';
import { OffersOverviewLayout } from '../../../features/offers-overview/components/offers-overview-layout/offers-overview-layout';
import { Store } from '@ngrx/store';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';
import { Search, SearchFilters } from '../../../features/search/components/search';

@Component({
  selector: 'app-offers-overview',
  imports: [OffersOverviewLayout, Search],
  templateUrl: './offers-overview.html',
  styleUrl: './offers-overview.scss',
})
export class OffersOverview {
  private readonly store = inject(Store);

  constructor() {
    this.store.dispatch(OffersOverviewActions.loadAllOffers({ filters: {} }));
  }

  public onSearchFilters(filters: SearchFilters) {
    this.store.dispatch(OffersOverviewActions.loadAllOffers({ filters }));
  }
}
