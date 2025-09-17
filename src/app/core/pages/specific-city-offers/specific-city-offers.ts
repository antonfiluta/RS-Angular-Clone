import { Component, inject, Input, OnInit } from '@angular/core';
import { SpecificCityLayout } from '../../../features/specific-city-offers/components/specific-city-layout/specific-city-layout';
import { Store } from '@ngrx/store';
import { SpecificCityActions } from '../../../features/specific-city-offers/store/specific-city.actions';

@Component({
  selector: 'app-specific-city-offers',
  imports: [SpecificCityLayout],
  templateUrl: './specific-city-offers.html',
  styleUrl: './specific-city-offers.scss',
})
export class SpecificCityOffers implements OnInit {
  @Input() cityId!: string;

  private readonly store = inject(Store);

  show() {
    console.log('cityId:', this.cityId);
  }

  ngOnInit() {
    if (this.cityId) {
      this.store.dispatch(SpecificCityActions.loadCity({ cityName: this.cityId }));
    }
  }
}
