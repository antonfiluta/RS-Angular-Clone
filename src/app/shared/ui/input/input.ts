/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, Input } from '@angular/core';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() type: 'text' | 'email' | 'date' | 'tel' = 'text';
  @Input() placeholder = '';

  value = '';
  onChange: (value: string) => void = () => {};
  onTouch: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setValue(target.value);
  }
}
