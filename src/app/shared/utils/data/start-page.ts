// apartments-overview.ts

export interface ApartmentsOverview {
  cities: City[];
}

export interface City {
  name: string; // Minsk
  apartments: Apartment[];
}

export interface Apartment {
  name: string;
  img: string;
  cost: number;
  rate: number;
}

// Пример данных с большим количеством квартир
export const sampleData: ApartmentsOverview = {
  cities: [
    {
      name: 'Minsk',
      apartments: [
        {
          name: 'Luxury Downtown Apartment',
          img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
          cost: 120,
          rate: 4.8,
        },
        {
          name: 'Cozy Studio near City Center',
          img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
          cost: 85,
          rate: 4.5,
        },
        {
          name: 'Modern Loft with River View',
          img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
          cost: 150,
          rate: 4.9,
        },
        {
          name: 'Spacious Family Apartment',
          img: 'https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1?w=400',
          cost: 110,
          rate: 4.7,
        },
        {
          name: 'Business Class Executive Suite',
          img: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=400',
          cost: 180,
          rate: 4.9,
        },
        {
          name: 'Charming Old Town Flat',
          img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
          cost: 95,
          rate: 4.6,
        },
        {
          name: 'Panoramic View Penthouse',
          img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
          cost: 220,
          rate: 4.9,
        },
      ],
    },
    {
      name: 'Grodno',
      apartments: [
        {
          name: 'Historic Center Apartment',
          img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400',
          cost: 75,
          rate: 4.6,
        },
        {
          name: 'Quiet Residential Area Flat',
          img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400',
          cost: 65,
          rate: 4.4,
        },
        {
          name: 'Modern New Development',
          img: 'https://images.unsplash.com/photo-1560449752-315d17c5b9bb?w=400',
          cost: 90,
          rate: 4.7,
        },
        {
          name: 'Riverside Apartment with Balcony',
          img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400',
          cost: 85,
          rate: 4.8,
        },
        {
          name: 'Compact Studio for Solo Travelers',
          img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400',
          cost: 55,
          rate: 4.3,
        },
        {
          name: 'Luxury Apartment with Garden',
          img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400',
          cost: 100,
          rate: 4.8,
        },
      ],
    },
    {
      name: 'Brest',
      apartments: [
        {
          name: 'Apartment near Brest Fortress',
          img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400',
          cost: 70,
          rate: 4.7,
        },
        {
          name: 'City Center Luxury Suite',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
          cost: 95,
          rate: 4.8,
        },
        {
          name: 'Cozy Wooden House Apartment',
          img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400',
          cost: 80,
          rate: 4.6,
        },
        {
          name: 'Modern Studio with Parking',
          img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?w=400',
          cost: 75,
          rate: 4.5,
        },
        {
          name: 'Spacious Loft for Groups',
          img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
          cost: 130,
          rate: 4.8,
        },
        {
          name: 'Budget-Friendly Apartment',
          img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
          cost: 60,
          rate: 4.2,
        },
        {
          name: 'Designer Apartment with Art Decor',
          img: 'https://images.unsplash.com/photo-1600566753052-d04fcf7934c9?w=400',
          cost: 110,
          rate: 4.9,
        },
      ],
    },
    {
      name: 'Vitebsk',
      apartments: [
        {
          name: 'Apartment with City Views',
          img: 'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=400',
          cost: 68,
          rate: 4.5,
        },
        {
          name: 'Modern Renovated Flat',
          img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400',
          cost: 72,
          rate: 4.6,
        },
        {
          name: 'Cozy Apartment near Park',
          img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400',
          cost: 65,
          rate: 4.4,
        },
        {
          name: "Business Traveler's Choice",
          img: 'https://images.unsplash.com/photo-1565623833373-2974c5d2db3f?w=400',
          cost: 88,
          rate: 4.7,
        },
        {
          name: 'Family-Friendly Large Apartment',
          img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400',
          cost: 105,
          rate: 4.8,
        },
        {
          name: 'Charming Studio in Historic Building',
          img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400',
          cost: 58,
          rate: 4.3,
        },
      ],
    },
    {
      name: 'Gomel',
      apartments: [
        {
          name: 'Luxury Riverside Apartment',
          img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400',
          cost: 78,
          rate: 4.6,
        },
        {
          name: 'Compact City Center Studio',
          img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400',
          cost: 62,
          rate: 4.4,
        },
        {
          name: 'Modern Apartment with Gym Access',
          img: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?w=400',
          cost: 85,
          rate: 4.7,
        },
        {
          name: 'Spacious 3-Bedroom Flat',
          img: 'https://images.unsplash.com/photo-1565623832583-3b3d4c213c65?w=400',
          cost: 120,
          rate: 4.8,
        },
        {
          name: 'Cozy Apartment with Fireplace',
          img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
          cost: 70,
          rate: 4.5,
        },
        {
          name: 'Executive Business Suite',
          img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
          cost: 95,
          rate: 4.8,
        },
        {
          name: 'Budget Apartment with All Amenities',
          img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400',
          cost: 55,
          rate: 4.2,
        },
      ],
    },
  ],
};
