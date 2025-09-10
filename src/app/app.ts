import { Component, inject } from '@angular/core';
import { Layout } from './shared/components/layout/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'de', 'ru', 'ua', 'by']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
