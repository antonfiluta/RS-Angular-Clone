import { Component, inject } from '@angular/core';
import { SpecificCityLayout } from '../../../features/specific-city-offers/component/specific-city-layout/specific-city-layout';
import { Store } from '@ngrx/store';
import { SpecificCityActions } from '../../../features/specific-city-offers/store/specific-city.actions';

@Component({
  selector: 'app-specific-city-offers',
  imports: [SpecificCityLayout],
  templateUrl: './specific-city-offers.html',
  styleUrl: './specific-city-offers.scss',
})
export class SpecificCityOffers {
  private readonly store = inject(Store);
  constructor() {
    this.store.dispatch(SpecificCityActions.loadCity({ cityName: 'Minsk' }));
  }
}
