import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [CommonModule],
  templateUrl: './action-button.html',
  styleUrl: './action-button.scss',
})
export class ActionButton {
  @Input() type: 'primary' | 'secondary' = 'primary';

  public isDisabled = input.required<boolean>();
  public content = input.required<string>();
  public icon = input.required<string>();
}
