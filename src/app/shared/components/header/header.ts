import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from '../../models/shared.models';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../../features/auth/store/auth.selector';
import { AuthActions } from '../../../features/auth/store/auth.actions';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly translate = inject(TranslateService);
  private readonly store = inject(Store);

  public readonly isAuth = this.store.selectSignal(selectIsAuthenticated);

  public menuOpen = false;
  public languageMenuOpen = false;
  public currentLanguage = 'en';

  public languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ua', name: 'Українська', flag: '🇺🇦' },
    { code: 'by', name: 'Беларуская', flag: '🇧🇾' },
  ];

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.languageMenuOpen = false;
    }
  }

  public toggleLanguageMenu() {
    this.languageMenuOpen = !this.languageMenuOpen;
    if (this.languageMenuOpen) {
      this.menuOpen = false;
    }
  }

  public closeAllMenus() {
    this.menuOpen = false;
    this.languageMenuOpen = false;
  }

  public selectLanguage(langCode: string) {
    this.currentLanguage = langCode;
    this.translate.use(langCode);
    this.closeAllMenus();
  }

  public logout() {
    this.store.dispatch(AuthActions.logoutUser());
    this.closeAllMenus();
  }

  constructor() {
    this.currentLanguage = this.translate.getCurrentLang() || 'en';
  }
}
