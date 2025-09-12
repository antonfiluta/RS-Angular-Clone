import { Component, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOffers } from '../../store/offers-overview.selector';
import { OffersOverviewList } from '../offers-overview-list/offers-overview-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offers-overview-layout',
  imports: [OffersOverviewList, RouterLink],
  templateUrl: './offers-overview-layout.html',
  styleUrl: './offers-overview-layout.scss',
})
export class OffersOverviewLayout {
  private readonly store = inject(Store);

  public readonly offers = this.store.selectSignal(selectOffers);
  public readonly citiesOffers = computed(() => this.offers()?.cities);
}
