import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginCredentials, SignUpCredentials, TokensModel } from '../../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  public login(credentials: LoginCredentials) {
    const url = '/auth/signin';

    return this.http.post<TokensModel>(url, credentials);
  }

  public register(credentials: SignUpCredentials) {
    const url = '/auth/signup';

    return this.http.post<TokensModel>(url, credentials);
  }
}
