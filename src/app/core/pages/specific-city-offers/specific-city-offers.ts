import { Component, inject, Input, OnInit } from '@angular/core';
import { SpecificCityLayout } from '../../../features/specific-city-offers/components/specific-city-layout/specific-city-layout';
import { Store } from '@ngrx/store';
import { OffersOverviewActions } from '../../../features/offers-overview/store/offers-overview.actions';

@Component({
  selector: 'app-specific-city-offers',
  imports: [SpecificCityLayout],
  templateUrl: './specific-city-offers.html',
  styleUrl: './specific-city-offers.scss',
})
export class SpecificCityOffers implements OnInit {
  @Input() cityId!: string;

  private readonly store = inject(Store);

  ngOnInit() {
    if (this.cityId) {
      this.store.dispatch(OffersOverviewActions.loadSpecificCityOffers({ cityId: this.cityId }));
    }
  }
}
