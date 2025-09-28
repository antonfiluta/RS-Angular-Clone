import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/profile-form.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  public loadUser(): Observable<User> {
    const url = '/user';

    return this.http.get<User>(url);
  }

  public editUser(updateUser: User) {
    const url = '/user';

    return this.http.patch<User>(url, updateUser);
  }
}
