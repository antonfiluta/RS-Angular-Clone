import { Component, computed, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCityName, selectOffers } from '../../store/specific-city.selector';
import { TemplatePipe } from '../../../../shared/pipes/template-pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { SpecificCityCard } from '../specific-city-card/specific-city-card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  public cityName = this.store.selectSignal(selectCityName);
  public offers = this.store.selectSignal(selectOffers);

  public offersAmount = computed(() => (this.offers()?.length || 0).toString());
}
