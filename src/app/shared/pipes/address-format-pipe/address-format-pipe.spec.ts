import { AddressFormatPipe } from './address-format-pipe';
import { Address } from '../../../features/offers-overview/models/offers-overview.models';

describe('AddressFormatPipe', () => {
  let pipe: AddressFormatPipe;

  beforeEach(() => {
    pipe = new AddressFormatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "Address not specified" for null', () => {
    expect(pipe.transform(null)).toBe('Address not specified');
  });

  it('should return "Address not specified" for undefined', () => {
    expect(pipe.transform(undefined)).toBe('Address not specified');
  });

  it('should return "Address not specified" for empty address', () => {
    const address: Address = {
      street: '',
      building: '',
      details: '',
      city: '',
      country: '',
    };
    expect(pipe.transform(address)).toBe('Address not specified');
  });

  it('should format complete address', () => {
    const address: Address = {
      street: 'Main Street',
      building: '10',
      details: 'Apt 5',
      city: 'New York',
      country: 'USA',
    };
    expect(pipe.transform(address)).toBe('Main Street, bld. 10, Apt 5, New York (USA)');
  });

  it('should format building number with "bld." prefix', () => {
    const address: Address = {
      street: 'Oak Avenue',
      building: '25',
      city: 'Berlin',
      country: 'Germany',
    };
    expect(pipe.transform(address)).toBe('Oak Avenue, bld. 25, Berlin (Germany)');
  });

  it('should format building number with letter', () => {
    const address: Address = {
      street: 'Park Lane',
      building: '12A',
      city: 'London',
      country: 'UK',
    };
    expect(pipe.transform(address)).toBe('Park Lane, bld. 12A, London (UK)');
  });

  it('should skip empty fields', () => {
    const address: Address = {
      street: 'Broadway',
      building: '',
      details: '',
      city: 'New York',
      country: 'USA',
    };
    expect(pipe.transform(address)).toBe('Broadway, New York (USA)');
  });

  it('should handle single part address', () => {
    const address: Address = {
      street: '',
      building: '',
      details: '',
      city: 'Berlin',
      country: '',
    };
    expect(pipe.transform(address)).toBe('Berlin');
  });

  it('should not add "bld." to non-numeric building', () => {
    const address: Address = {
      street: 'Main Road',
      building: 'Tower A',
      city: 'Dubai',
      country: 'UAE',
    };
    expect(pipe.transform(address)).toBe('Main Road, Tower A, Dubai (UAE)');
  });
});
