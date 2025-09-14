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
    path: 'offers',
    title: 'Offers',
    loadComponent: () =>
      import('./core/pages/offers-overview/offers-overview').then((c) => c.OffersOverview),
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
    path: 'about',
    title: 'About',
    loadComponent: () => import('./core/pages/about/about').then((c) => c.About),
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
