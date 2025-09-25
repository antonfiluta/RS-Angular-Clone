export interface User {
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;

  profile: UserProfile;

  favoriteApartments: string[];
}

export interface UserProfile {
  characteristics: Characteristic[];
  languages: string[];
  countries: string[];

  aboutMe: string;

  gender: Gender;
  birthday: Date;

  phone: string;
}

export interface Characteristic {
  icon?: string;
  placeholder?: string;
  content: string;
}

export type Gender = 'male' | 'female' | 'other';

export const initialCharacteristics: Characteristic[] = [
  {
    icon: 'lightbulb',
    placeholder: 'my fun fact',
    content: '',
  },
  {
    icon: 'headphones',
    placeholder: 'my favorite song',
    content: '',
  },
  {
    icon: 'heart',
    placeholder: 'i’m obsessed with',
    content: '',
  },
];
