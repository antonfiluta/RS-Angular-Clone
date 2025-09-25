import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _current: 'light' | 'dark' = 'light';
  private readonly THEME_KEY = 'theme';

  get current(): 'light' | 'dark' {
    return this._current;
  }

  init() {
    const saved = (localStorage.getItem(this.THEME_KEY) as 'light' | 'dark') ?? 'light';
    this.setTheme(saved);
  }

  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
    this._current = theme;
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggle() {
    this.setTheme(this._current === 'light' ? 'dark' : 'light');
  }
}
