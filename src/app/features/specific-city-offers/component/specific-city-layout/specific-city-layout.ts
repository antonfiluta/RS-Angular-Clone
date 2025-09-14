import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCityName, selectOffers } from '../../store/specific-city.selector';

@Component({
  selector: 'app-specific-city-layout',
  imports: [],
  templateUrl: './specific-city-layout.html',
  styleUrl: './specific-city-layout.scss',
})
export class SpecificCityLayout {
  private readonly store = inject(Store);

  public cityName = this.store.selectSignal(selectCityName);
  public offers = this.store.selectSignal(selectOffers);
}
