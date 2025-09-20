export interface User {
  // Обязательные поля
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;

  profile: UserProfile;

  // Избранное
  favoriteApartments: string[]; // apartment IDs
}

export interface UserProfile {
  // Характеристики
  characteristics: Characteristic[];
  languages: string[];
  countries: string[];

  // О себе
  aboutMe: string; // max 450 chars

  // Персональная информация
  gender: Gender;
  birthday: Date;

  // Контактная информация
  phone: string;
}

export interface Characteristic {
  icon: string; // Название иконки (lightbulb, headphones, heart)
  placeholder: string; // Текст плейсхолдера
  content: string; // Содержание
}

export type Gender = 'male' | 'female' | 'other';

// Начальные данные характеристик пользователя
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
