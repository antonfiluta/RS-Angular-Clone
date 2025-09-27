import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class A11yAnnouncerService {
  private live = document.createElement('div');

  constructor() {
    this.live.setAttribute('aria-live', 'polite');
    this.live.setAttribute('class', 'sr-only');
    document.body.appendChild(this.live);
  }

  announce(message: string, mode: 'polite' | 'assertive' = 'polite') {
    this.live.setAttribute('aria-live', mode);
    this.live.textContent = '';
    setTimeout(() => (this.live.textContent = message), 10);
  }
}
