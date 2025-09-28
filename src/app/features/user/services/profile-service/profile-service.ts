import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../../auth/models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  public editUser(updateUser: User) {
    const url = '/user';

    return this.http.patch<User>(url, updateUser);
  }
}
