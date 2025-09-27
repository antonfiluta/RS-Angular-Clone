import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
// import { OffersOverviewModel } from '../../models/offers-overview.models';
import { sampleData } from '../../../../shared/utils/data/start-page';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, of } from 'rxjs';
// import { OffersOverviewModel } from '../../models/offers-overview.models';

@Injectable({
  providedIn: 'root',
})
export class OffersOverviewService {
  private http = inject(HttpClient);

  public getOffersOverview() {
    const signalForTestedFuncuanality = signal(sampleData);

    return toObservable(signalForTestedFuncuanality);
  }
  // public getOffersOverview() {
  //   const BASE_URL = 'https://apartment-klol.onrender.com';
  //   const url = `${BASE_URL}/offers/overview`;

  //   return this.http.get<OffersOverviewModel>(url);
  // }

  public getSpecificCityOffers(cityId: string) {
    return of(null).pipe(
      map(() => {
        const city = sampleData.cities.find((city) => city.name === cityId);
        return {
          name: city?.name ?? '',
          offers: city?.offers ?? [],
        };
      }),
    );
  }
  // public getSpecificCityOffers(cityId: string) {
  //   const url = `/offers/${cityId}`;

  //   return this.http.get<SpecificCityState>(url);
  // }

  public getSpecificOffer(cityId: string, offerId: string) {
    return of(null).pipe(
      map(() => {
        const city = sampleData.cities.find((city) => city.name === cityId);
        if (!city) throw new Error('City not found');

        const offer = city.offers.find((offer) => offer.id === offerId);
        if (!offer) throw new Error('Offer not found');

        return offer;
      }),
    );
  }
  // public getSpecificOffer(cityId: string, offerId: string) {
  //   const url = `/offers/${cityId}/${offerId}`;

  //   return this.http.get<SpecificCityState>(url);
  // }

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
