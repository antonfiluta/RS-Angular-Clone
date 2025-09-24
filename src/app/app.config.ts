import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AppReducer } from './core/store';
import { OffersOverviewEffects } from './features/offers-overview/store/offers-overview.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthEffects } from './features/auth/store/auth.effects';
import { UserEffects } from './features/user/store/user.effects';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({ ...AppReducer }),
    provideEffects(OffersOverviewEffects, AuthEffects, UserEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore(),
    provideHttpClient(withInterceptors([])),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
        fallbackLang: 'en',
      }),
    ),
  ],
};
