import { PropertyType } from '../../..//shared/utils/apartments.models';

export const PROPERTY_TYPES = [
  {
    value: 'apartment' as PropertyType,
    icon: '🏢',
    label: 'Apartment',
    description: 'A place within a multi-unit building',
  },
  {
    value: 'part_apartment' as PropertyType,
    icon: '🏠',
    label: 'Part of apartment',
    description: 'A room or part of an apartment',
  },
  {
    value: 'whole_house' as PropertyType,
    icon: '🏡',
    label: 'Whole house',
    description: 'A standalone house',
  },
  { value: 'room' as PropertyType, icon: '🚪', label: 'Room', description: 'A room in a house' },
  {
    value: 'dormitory' as PropertyType,
    icon: '🏫',
    label: 'Dormitory',
    description: 'A shared living space',
  },
  {
    value: 'cabin' as PropertyType,
    icon: '🛖',
    label: 'Cabin',
    description: 'A small house in nature',
  },
];

export const BASIC_AMENITIES = [
  { key: 'wifi', icon: '📶', label: 'WiFi' },
  { key: 'tv', icon: '📺', label: 'TV' },
  { key: 'kitchen', icon: '🍳', label: 'Kitchen' },
  { key: 'washer', icon: '🧺', label: 'Washer' },
  { key: 'airConditioning', icon: '❄️', label: 'Air conditioning' },
  { key: 'parking', icon: '🅿️', label: 'Free parking' },
];

export const LUXURY_AMENITIES = [
  { key: 'pool', icon: '🏊', label: 'Pool' },
  { key: 'piano', icon: '🎹', label: 'Piano' },
  { key: 'beachAccess', icon: '🏖️', label: 'Beach access' },
  { key: 'gym', icon: '🏋️', label: 'Gym' },
  { key: 'billiards', icon: '🎱', label: 'Billiards table' },
  { key: 'grill', icon: '🔥', label: 'BBQ grill' },
];

export const SAFETY_ITEMS = [
  { key: 'smokeDetector', icon: '🚨', label: 'Smoke detector' },
  { key: 'fireExtinguisher', icon: '🧯', label: 'Fire extinguisher' },
  { key: 'firstAidKit', icon: '⛑️', label: 'First aid kit' },
  { key: 'securitySystem', icon: '🔒', label: 'Security system' },
];
