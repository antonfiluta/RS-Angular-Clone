export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

export interface TokensModel {
  accessToken: string;
  refreshToken: string;
}
