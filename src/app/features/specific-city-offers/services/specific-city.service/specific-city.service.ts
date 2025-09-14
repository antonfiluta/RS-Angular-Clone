import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { sampleData } from '../../../../shared/utils/data/start-page';
import { toObservable } from '@angular/core/rxjs-interop';
// import { SpecificCityState } from '../../store/specific-city.state';

@Injectable({
  providedIn: 'root',
})
export class SpecificCityService {
  private http = inject(HttpClient);

  public getCity(cityID: string) {
    //tested functuanality
    const signalForTestedFuncuanality = signal(
      sampleData.cities.find((city) => city.name === cityID),
    );

    const response = computed(() => ({
      cityName: signalForTestedFuncuanality()?.name || '',
      offers: signalForTestedFuncuanality()?.offers || [],
    }));

    return toObservable(response);
  }

  // public getCity(cityID: string) {
  //   //real functuanality
  //   const url = `/offers/${cityID}`;

  //   return this.http.get<SpecificCityState>(url);
  // }
}
