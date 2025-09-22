import { Component, inject } from '@angular/core';
import { Layout } from './shared/components/layout/layout';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from './core/services/local-storage-service/local-storage';
import { Store } from '@ngrx/store';
import { AuthActions } from './features/auth/store/auth.actions';

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

  constructor() {
    this.translate.addLangs(['en', 'de', 'ru', 'ua', 'by']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');

    const token = this.localStorage.getItem<string>('token');
    if (token) {
      this.store.dispatch(AuthActions.initUserSession({ token }));
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
