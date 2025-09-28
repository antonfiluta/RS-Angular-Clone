import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../../auth/models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  public editUser(updateUser: User) {
    const url = `/user/${updateUser._id}`;

    return this.http.patch(url, updateUser);
  }

  public loadUser(id: string) {
    const url = `/user/${id}`;

    return this.http.get<User>(url);
  }
}
