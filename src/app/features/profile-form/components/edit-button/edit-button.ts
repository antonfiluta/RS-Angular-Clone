import { Component, input, output } from '@angular/core';
import { ActionButton } from '../../../../shared/ui/action-button/action-button';

@Component({
  selector: 'app-edit-button',
  imports: [ActionButton],
  templateUrl: './edit-button.html',
  styleUrl: './edit-button.scss',
})
export class EditButton {
  public isEditMode = input.required<boolean>();
  public isFormValid = input.required<boolean>();

  public edit = output<void>();
  public cancelEdit = output<void>();
  public saveEdit = output<void>();

  public startEdit(): void {
    this.edit.emit();
  }

  public cancel(): void {
    this.cancelEdit.emit();
  }

  public save(): void {
    if (this.isFormValid()) {
      this.saveEdit.emit();
    }
  }
}
