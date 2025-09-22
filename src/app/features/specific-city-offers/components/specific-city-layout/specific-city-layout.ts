import { Component, computed, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslatePipe } from '@ngx-translate/core';
import { SpecificCityCard } from '../specific-city-card/specific-city-card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  selectCityName,
  selectSpecificCityOffers,
} from '../../../offers-overview/store/offers-overview.selector';
import { TemplatePipe } from '../../../../shared/pipes/template-pipe/template-pipe';

@Component({
  selector: 'app-specific-city-layout',
  standalone: true,
  imports: [CommonModule, TemplatePipe, TranslatePipe, SpecificCityCard, RouterLink],
  templateUrl: './specific-city-layout.html',
  styleUrl: './specific-city-layout.scss',
})
export class SpecificCityLayout {
  @Input() cityId!: string;
  private readonly store = inject(Store);

  public readonly cityName = this.store.selectSignal(selectCityName);
  public readonly offers = this.store.selectSignal(selectSpecificCityOffers);

  public offersAmount = computed(() => (this.offers()?.length ?? 0).toString());
}
