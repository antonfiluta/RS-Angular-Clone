import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutChecker {
  private router = inject(Router);

  private forbiddenRotes = ['personal-info', 'profile', 'listing', 'likes'];

  private containsPathSegment(): boolean {
    const currentUrl = this.router.url.toLowerCase();
    return this.forbiddenRotes.some((segment) => currentUrl.includes(segment.toLowerCase()));
  }

  public checkRoute() {
    if (this.containsPathSegment()) {
      this.router.navigate(['/']);
    }
  }
}
