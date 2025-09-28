import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard/auth-guard';
import { profileGuard } from './core/guards/profile-guard/profile-guard';

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
    canActivate: [authGuard],
  },
  {
    path: 'personal-info',
    title: 'Personal Information',
    loadComponent: () =>
      import('./core/pages/personal-info/personal-info').then((c) => c.PersonalInfo),
    canActivate: [profileGuard],
  },
  {
    path: 'profile',
    title: 'Profile',
    loadComponent: () => import('./core/pages/profile/profile').then((c) => c.Profile),
    canActivate: [profileGuard],
  },
  {
    path: 'listing',
    title: 'Listing',
    loadComponent: () => import('./core/pages/listing/listing').then((c) => c.Listing),
    canActivate: [profileGuard],
  },
  {
    path: 'offers',
    title: 'Offers',
    loadComponent: () =>
      import('./core/pages/offers-overview/offers-overview').then((c) => c.OffersOverview),
  },
  {
    path: 'offers/:cityId',
    title: 'Offer',
    loadComponent: () =>
      import('./core/pages/specific-city-offers/specific-city-offers').then(
        (c) => c.SpecificCityOffers,
      ),
  },
  {
    path: 'offers/:cityId/:offerId',
    title: 'Offer',
    loadComponent: () =>
      import('./core/pages/specific-offer/specific-offer').then((c) => c.SpecificOffer),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'offers',
  },
  {
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('./core/pages/not-found/not-found').then((c) => c.NotFound),
  },
];
