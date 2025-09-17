import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = false;
  languageMenuOpen = false;
  currentLanguage = 'en';

  private translate = inject(TranslateService);

  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ua', name: 'Українська', flag: '🇺🇦' },
    { code: 'by', name: 'Беларуская', flag: '🇧🇾' },
  ];

  constructor() {
    this.currentLanguage = this.translate.getCurrentLang() || 'en';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.languageMenuOpen = false;
    }
  }

  toggleLanguageMenu() {
    this.languageMenuOpen = !this.languageMenuOpen;
    if (this.languageMenuOpen) {
      this.menuOpen = false;
    }
  }

  closeAllMenus() {
    this.menuOpen = false;
    this.languageMenuOpen = false;
  }

  selectLanguage(langCode: string) {
    this.currentLanguage = langCode;
    this.translate.use(langCode);
    this.closeAllMenus();
  }
}
