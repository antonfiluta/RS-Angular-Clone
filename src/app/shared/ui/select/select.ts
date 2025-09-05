import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true,
    },
  ],
})
export class Select implements ControlValueAccessor {
  @Input() label!: string;
  @Input() options: string[] = [];

  value = '';

  // ControlValueAccessor callbacks
  private onChange = (value: string) => {
    console.log(value);
  };
  private onTouched = () => {
    // noop: called by Angular when the control is touched
  };

  // Called by Angular to write a value from the form model into the view
  writeValue(value: string): void {
    this.value = value ?? '';
  }

  // Called by Angular to register a change callback
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Called by Angular to register a touched callback
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Optional: called by Angular when form control is disabled
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  disabled = false;

  // Call this when the user selects a new option
  selectValue(value: string) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
