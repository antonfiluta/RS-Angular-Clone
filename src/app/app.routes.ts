import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./core/pages/auth/auth').then((c) => c.Auth),
    children: [
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./features/auth/components/login/login').then((c) => c.Login),
      },
      {
        path: 'sign-up',
        title: 'Sign Up',
        loadComponent: () =>
          import('./features/auth/components/sign-up/sign-up').then((c) => c.SignUp),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'personal-info',
    title: 'Personal Information',
    loadComponent: () =>
      import('./core/pages/personal-info/personal-info').then((c) => c.PersonalInfo),
  },

  {
    path: 'profile',
    title: 'Profile',
    loadComponent: () => import('./core/pages/profile/profile').then((c) => c.Profile),
  },
  {
    path: 'booking',
    title: 'Booking',
    loadComponent: () => import('./core/pages/booking/booking').then((c) => c.Booking),
  },
  {
    path: 'hosting',
    title: 'Hosting',
    loadComponent: () => import('./core/pages/hosting/hosting').then((c) => c.Hosting),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./core/pages/about/about').then((c) => c.About),
  },
  {
    path: '',
    title: 'Home',
    pathMatch: 'full',
    loadComponent: () => import('./core/pages/homes/homes').then((c) => c.Homes),
  },
  {
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('./core/pages/not-found/not-found').then((c) => c.NotFound),
  },
];
