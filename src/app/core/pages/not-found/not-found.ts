import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  private readonly location = inject(Location);

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      window.location.href = '/';
    }
  }
}
