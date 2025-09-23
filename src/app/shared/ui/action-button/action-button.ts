import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [CommonModule],
  templateUrl: './action-button.html',
  styleUrl: './action-button.scss',
})
export class ActionButton {
  public isDisabled = input.required<boolean>();
  public isDark = input.required<boolean>();
  public content = input.required<string>();
  public icon = input.required<string>();
}
