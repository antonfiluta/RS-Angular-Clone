import { Injectable, Signal, inject } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, map, startWith } from 'rxjs';
import { errorMessages } from '../../utils/data/error-messages';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  private errorMessages = errorMessages;
  private translate = inject(TranslateService);

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
          const key = this.errorMessages[errorCode] || 'VALIDATION.UNKNOWN';
          return this.translate.instant(key, errorConfig);
        }),
      ),
    );
  }

  public isFormInvalid(form: FormGroup) {
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
