import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'template',
  standalone: true,
})
export class TemplatePipe implements PipeTransform {
  transform(value: string, params: Record<string, string>): string {
    if (!value) return '';

    let result = value;
    Object.entries(params).forEach(([key, val]) => {
      result = result.replace(`{${key}}`, val);
    });

    return result;
  }
}
