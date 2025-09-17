import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { sampleData } from '../../../../shared/utils/data/start-page';
import { delay, map, of } from 'rxjs';
// import { SpecificCityState } from '../../store/specific-city.state';

@Injectable({
  providedIn: 'root',
})
export class SpecificCityService {
  private http = inject(HttpClient);

  public getCity(cityID: string) {
    return of(null).pipe(
      delay(100), // Имитация асинхронности
      map(() => {
        const city = sampleData.cities.find((city) => city.name === cityID);
        return {
          cityName: city?.name || '',
          offers: city?.offers || [],
        };
      }),
    );
  }

  // public getCity(cityID: string) {
  //   //real functuanality
  //   const url = `/offers/${cityID}`;

  //   return this.http.get<SpecificCityState>(url);
  // }
}
