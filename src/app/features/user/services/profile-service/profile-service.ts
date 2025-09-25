import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/profile-form.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  public loadUser(token: string): Observable<User> {
    if (!token) throw new Error('');
    return of({
      id: '1',
      email: 'user@example.com',
      password: 'password123',
      firstname: 'John',
      lastname: 'Doe',
      profile: {
        characteristics: [
          {
            content: 'Genius',
          },
          {
            content: 'Great boy',
          },
          {
            content: 'Clean girl',
          },
        ],
        languages: ['english', 'ukrainian', 'german'],
        countries: ['germany', 'france', 'thailand'],
        aboutMe: 'Love hosting travellers and exploring new cultures!',
        gender: 'male',
        birthday: new Date('1990-01-01'),
        phone: '1234567890',
      },
      favoriteApartments: [],
    });
  }
  // public loadProfile() {
  //   const url = '/api/profile';

  //   return this.http.get<UserProfile>(url);
  // }

  public editUser(updateUser: User): Observable<User> {
    return of(updateUser);
  }
  // public editUser(updateUser: User) {
  //   const url = '/api/profile';

  //   return this.http.post<User>(url, updateUser);
  // }
}
