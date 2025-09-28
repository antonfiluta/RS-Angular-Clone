import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { sampleData } from '../../../../shared/utils/data/start-page';
import { map, of } from 'rxjs';
import { RawAparment } from '../../models/offers-overview.models';
import { SearchFilters } from '../../../search/components/search';
import { FiltersTransformService } from '../filters-transform.service/filters-transform.service';

@Injectable({
  providedIn: 'root',
})
export class OffersOverviewService {
  private readonly http = inject(HttpClient);
  private readonly filtersTransformService = inject(FiltersTransformService);

  public getRawOffers(filters: Partial<SearchFilters>) {
    const filtersString = this.filtersTransformService.buildQueryParams(filters);
    const url = `/apartment${filtersString}`;

    return this.http.get<RawAparment[]>(url);
  }

  public getSpecificOffer(offerId: string) {
    const url = `/apartment/${offerId}`;

    return this.http.get<RawAparment>(url);
  }

  public toggleOfferLike(cityId: string, offerId: string, isLiked: boolean) {
    return of(null).pipe(
      map(() => {
        const city = sampleData.cities.find((city) => city.name === cityId);
        if (!city) throw new Error('City not found');

        const offer = city.offers.find((offer) => offer.id === offerId);
        if (!offer) throw new Error('Offer not found');

        return {
          ...offer,
          isLiked,
        };
      }),
    );
  }
  // public toggleOfferLike(cityId: string, offerId: string, isLiked: boolean) {
  //   const url = `/offers/${cityId}/${offerId}/isLiked`;

  //   return this.http.post<SpecificCityState>(url, { isLiked });
  // }
}
