import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginCredentials, SignUpCredentials } from '../../models/auth.models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  public login(credentials: LoginCredentials) {
    return of('4242424234234' + credentials.password);
  }
  // login(credentials: LoginCredentials) {
  //   const url = '/auth/login';

  //   return this.http.post<string>(url, credentials);
  // }

  public register(credentials: SignUpCredentials) {
    return of('4242424234234' + credentials.password);
  }
  // register(credentials: SignUpCredentials) {
  //   const url = '/auth/sign-up';

  //   return this.http.post<string>(url, credentials);
  // }
}
