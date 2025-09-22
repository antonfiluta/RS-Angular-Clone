import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../../../features/offers-overview/models/offers-overview.models';

@Pipe({
  name: 'addressFormat',
  standalone: true,
})
export class AddressFormatPipe implements PipeTransform {
  transform(address: Address | null | undefined): string {
    if (!address) return 'Address not specified';

    const parts = [
      address.street,
      this.formatBuilding(address.building),
      address.details,
      address.city,
      address.country,
    ].filter(
      (part): part is string => part !== undefined && part !== null && part.trim().length > 0,
    );

    return this.formatAddressParts(parts);
  }

  private formatBuilding(building: string | undefined): string {
    if (!building) return '';

    if (/^\d+[a-z]?$/i.test(building)) {
      return `bld. ${building}`;
    }

    return building;
  }

  private formatAddressParts(parts: string[]): string {
    if (parts.length === 0) return 'Address not specified';

    if (parts.length > 1) {
      const lastPart = parts.pop()!;
      return `${parts.join(', ')} (${lastPart})`;
    }

    return parts[0];
  }
}
