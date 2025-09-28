import { Injectable } from '@angular/core';
import { SearchFilters } from '../../../search/components/search';

@Injectable({
  providedIn: 'root',
})
export class FiltersTransformService {
  public buildQueryParams(filters: Partial<SearchFilters>): string {
    const params = new URLSearchParams();

    if (filters.city && filters.city.trim() !== '') {
      params.append('city', filters.city.trim());
    }

    if (filters.minGuests !== null && filters.minGuests !== undefined && filters.minGuests > 0) {
      params.append('maxGuests', filters.minGuests.toString());
    }

    if (filters.maxPrice !== null && filters.maxPrice !== undefined && filters.maxPrice > 0) {
      params.append('price', filters.maxPrice.toString());
    }

    if (filters.page !== null && filters.page !== undefined && filters.page > 0) {
      params.append('page', filters.page.toString());
    }

    if (filters.limit !== null && filters.limit !== undefined && filters.limit > 0) {
      params.append('limit', filters.limit.toString());
    }

    const queryString = params.toString();
    return queryString ? `?${queryString}` : '';
  }
}
