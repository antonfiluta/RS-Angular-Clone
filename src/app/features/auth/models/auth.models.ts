export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
}

export interface TokensModel {
  accessToken: string;
  refreshToken: string;
}
