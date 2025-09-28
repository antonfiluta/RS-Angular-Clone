import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeId',
})
export class SanitizeIdPipe implements PipeTransform {
  transform(value: string, index?: number): string {
    const base = value.toLowerCase().replace(/\s+/g, '-');
    return index != null ? `${base}-${index}` : base;
  }
}
