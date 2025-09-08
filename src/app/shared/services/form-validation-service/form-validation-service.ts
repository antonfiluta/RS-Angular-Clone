import { Injectable, Signal } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, map, startWith } from 'rxjs';
import { errorMessages } from '../../utils/data/error-messages';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  private errorMessages = errorMessages;

  public isFieldInvalid(control: AbstractControl | null): Signal<boolean> {
    if (!control) throw new Error('Control not found');

    return toSignal(
      control.statusChanges.pipe(
        startWith(control.status),
        map(() => control.invalid && !control.pristine),
        distinctUntilChanged(),
      ),
      { initialValue: control.invalid && !control.pristine },
    );
  }

  public getFieldError(control: AbstractControl | null) {
    if (!control) throw new Error('Control not found');

    return toSignal(
      control.valueChanges.pipe(
        startWith(control.value),
        map(() => {
          if (!control.errors) return '';

          const errorCode = Object.keys(control.errors)[0];
          const errorConfig = control.errors[errorCode];

          let message = this.errorMessages[errorCode] || 'Unknown error';

          if (errorConfig && typeof errorConfig === 'object') {
            Object.keys(errorConfig).forEach((key) => {
              message = message.replace(`{${key}}`, errorConfig[key]);
            });
          }

          return message;
        }),
      ),
    );
  }

  isFormInvalid(form: FormGroup) {
    return toSignal(
      form.statusChanges.pipe(
        startWith(form.status),
        map(() => form.invalid),
        distinctUntilChanged(),
      ),
      { initialValue: form.invalid },
    );
  }
}
