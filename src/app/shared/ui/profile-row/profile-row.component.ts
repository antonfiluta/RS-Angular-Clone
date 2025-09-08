import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss',
})
export class ProfileRowComponent {
  @Input() title!: string;
  @Input() fieldKey!: string;
  @Input() control!: FormControl;
  @Input() empty = false;
  @Input() actionLabel: 'Add' | 'Edit' = 'Add';
  @Input() isEditing = false;
  @Input() sub?: string;
  @Input() type: 'text' | 'email' | 'date' | 'select' = 'text';
  @Input() options: string[] = [];
  @Input() isFieldInvalid = false;
  @Input() errorMessage = '';

  @Output() editField = new EventEmitter<string>();
  @Output() saveField = new EventEmitter<string>();
  @Output() cancelEdit = new EventEmitter<string>();
}
