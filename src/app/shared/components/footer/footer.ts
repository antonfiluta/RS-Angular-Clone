import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  isGitHubListVisible = false;
  currentYear = new Date().getFullYear();

  authors = [
    { name: 'Anton Filiuta', github: 'https://github.com/antonfiluta' },
    { name: 'Svitlana Grytsai', github: 'https://github.com/SvitlanaG' },
    { name: 'Stanislav Kravchuk', github: 'https://github.com/kravchuk-st' },
  ];

  private translate = inject(TranslateService);

  toggleGitHubList(): void {
    this.isGitHubListVisible = !this.isGitHubListVisible;
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleGitHubList();
    }
  }

  getTooltipText(): string {
    return this.isGitHubListVisible
      ? this.translate.instant('FOOTER.HIDE_AUTHORS')
      : this.translate.instant('FOOTER.SHOW_AUTHORS');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const clickedInside = target.closest('.github-dropdown-wrapper');
    if (!clickedInside && this.isGitHubListVisible) {
      this.isGitHubListVisible = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onEscape(event: KeyboardEvent | Event) {
    if (event instanceof KeyboardEvent && event.key === 'Escape') {
      if (this.isGitHubListVisible) {
        this.isGitHubListVisible = false;
        event.stopPropagation();
      }
    }
  }
}
