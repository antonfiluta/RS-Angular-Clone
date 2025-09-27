import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SanitizeIdPipe } from '../../pipes/sanitize-id-pipe/sanitize-id-pipe';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-profile-row',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, SanitizeIdPipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileRow),
      multi: true,
    },
  ],
  templateUrl: './profile-row.html',
  styleUrl: './profile-row.scss',
})
export class ProfileRow implements ControlValueAccessor {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() addButtonText = 'PROFILE.ADD_ITEM';
  @Input() emptyMessage = 'PROFILE.NO_ITEMS';
  @Input() isEditMode = false;
  @Input() maxItems = 10;
  @Input() iconClass = 'pi pi-tag';
  @Input() options: SelectOption[] = [];

  formArray: FormArray<FormControl<string>> = new FormArray<FormControl<string>>([]);
  displayItems: string[] = [];

  private onChange: (_value: string[]) => void = () => void 0;
  private onTouched: () => void = () => void 0;

  getOptionLabel(value: string): string {
    const option = this.options.find((opt) => opt.value === value);
    return option ? option.label : value;
  }

  addItem(): void {
    if (this.formArray.length < this.maxItems) {
      const newControl = new FormControl<string>('', { nonNullable: true });
      this.formArray.push(newControl);
      this.updateValue();
    }
  }

  removeItem(index: number): void {
    this.formArray.removeAt(index);
    this.updateValue();
  }

  private updateValue(): void {
    const values = this.formArray.value.filter((val) => val && val.trim() !== '');
    this.displayItems = [...values];
    this.onChange(values);
  }

  writeValue(value: string[]): void {
    this.formArray.clear();
    this.displayItems = value || [];

    if (value && value.length > 0) {
      value.forEach((item) => {
        this.formArray.push(new FormControl<string>(item, { nonNullable: true }));
      });
    }
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
    this.formArray.valueChanges.subscribe(() => {
      this.updateValue();
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formArray.disable();
    } else {
      this.formArray.enable();
    }
  }
}
