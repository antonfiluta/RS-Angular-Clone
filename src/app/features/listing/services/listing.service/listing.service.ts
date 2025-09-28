import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Apartment } from '../../../../shared/utils/apartments.models';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private apartments = signal<Apartment[]>([]);

  getApartments(): Observable<Apartment[]> {
    return of(this.apartments());
  }

  createApartment(apartment: Partial<Apartment>): Observable<Apartment> {
    const newApartment: Apartment = {
      ...apartment,
      id: apartment.id || crypto.randomUUID(),
      hostId: apartment.hostId || 'current-user-id',
      isFavorite: false,
      averageRating: 0,
    } as Apartment;

    this.apartments.update((apartments) => [...apartments, newApartment]);
    return of(newApartment);
  }

  updateApartment(id: string, updates: Partial<Apartment>): Observable<Apartment> {
    this.apartments.update((apartments) =>
      apartments.map((apt) => (apt.id === id ? { ...apt, ...updates } : apt)),
    );

    const updatedApartment = this.apartments().find((apt) => apt.id === id);
    return of(updatedApartment!);
  }

  deleteApartment(id: string): Observable<void> {
    this.apartments.update((apartments) => apartments.filter((apt) => apt.id !== id));
    return of(void 0);
  }

  getApartmentById(id: string): Observable<Apartment | undefined> {
    const apartment = this.apartments().find((apt) => apt.id === id);
    return of(apartment);
  }
}
