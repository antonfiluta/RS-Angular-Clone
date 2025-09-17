import { Component, input } from '@angular/core';
import { OfferModel } from '../../../offers-overview/models/offers-overview.models';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-specific-city-card',
  imports: [TranslateModule],
  templateUrl: './specific-city-card.html',
  styleUrl: './specific-city-card.scss',
})
export class SpecificCityCard {
  public readonly offer = input.required<OfferModel>();
}
