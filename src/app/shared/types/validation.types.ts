import { Signal } from '@angular/core';

export interface ValidationError {
  message: string;
  code?: string;
  field?: string;
}

export interface ValidationSignal {
  invalid: Signal<boolean>;
  error: Signal<string | ValidationError | undefined>;
}
