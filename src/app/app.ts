import { Component, inject } from '@angular/core';
import { Layout } from './shared/components/layout/layout';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from './core/services/local-storage-service/local-storage';
import { Store } from '@ngrx/store';
import { AuthActions } from './features/auth/store/auth.actions';
import { ThemeService } from './core/services/theme-service/theme.service';
import { AuthResponse } from './features/auth/models/auth.models';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);
  private readonly store = inject(Store);
  private readonly localStorage = inject(LocalStorage);
  private theme = inject(ThemeService);

  constructor() {
    this.translate.addLangs(['en', 'de', 'ru', 'ua', 'by']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
    this.theme.init();

    const authData = this.localStorage.getItem<AuthResponse>('user');
    if (authData) {
      this.store.dispatch(AuthActions.initUserSession({ authResponse: authData }));
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
