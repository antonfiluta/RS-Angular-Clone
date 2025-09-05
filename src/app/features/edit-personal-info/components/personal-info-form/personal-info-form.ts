import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../../../shared/ui/input/input';
import { Button } from '../../../../shared/ui/button/button';
import { Select } from '../../../../shared/ui/select/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputComponent, Button, Select],
  templateUrl: './personal-info-form.html',
  styleUrl: './personal-info-form.scss',
})
export class PersonalInfoForm {
  firstName = 'Alexandra';
  lastName = 'Musterman';
  email = 'alexandra@gmail.com';
  phone = '+49 123 456789';
  dob = '1990-05-12';
  gender = 'Female';

  // Track which field is in edit mode
  editFieldName: string | null = null;

  editField(field: string) {
    this.editFieldName = field;
  }

  cancelEdit() {
    this.editFieldName = null;
  }

  saveField() {
    // Placeholder for save logic
    this.editFieldName = null;
  }
}
