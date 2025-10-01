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

export interface AuthResponse {
  tokens: TokensModel;
  user: User;
}

export interface TokensModel {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: ROLE;
  aboutMe: string;
  birthday?: Date;
  gender?: GENDER;
  phone: string;
  interests: string[];
  myCountries: string[];
  myLanguages: string[];
  createdAt: string;
  updatedAt: string;
}

export enum ROLE {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  WORKER = 'WORKER',
  USER = 'USER',
}

export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}
