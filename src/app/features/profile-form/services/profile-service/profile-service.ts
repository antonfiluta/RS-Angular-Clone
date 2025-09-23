import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProfileData } from '../../models/profile-form.models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly http = inject(HttpClient);

  public loadProfile() {
    return of({
      bio: 'Love hosting travellers and exploring new cultures!',
      interests: ['cooking', 'hiking', 'photography', 'reading'],
      languages: ['english', 'ukrainian', 'german'],
      countriesLived: ['germany', 'france', 'thailand'],
    });
  }
  // public loadProfile() {
  //   const url = '/api/profile';

  //   return this.http.get<ProfileData>(url);
  // }

  public editProfile(updateData: ProfileData) {
    return of(updateData);
  }
}
