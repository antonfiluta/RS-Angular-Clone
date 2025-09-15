import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-personal-info-row',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './personal-info-row.component.html',
  styleUrl: './personal-info-row.component.scss',
})
export class PersonalInfoRowComponent {
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
