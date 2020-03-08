interface Destination {
  title: string;
  lat: number;
  lng: number;
  area: string;
  country: string;
  category: DestinationCategory;
}

enum DestinationCategory {
  "WELLNESS" = 0,
  "FOOD_AND_DRINK" = 1,
  "CULTURE" = 2,
  "ADVENTURE" = 3,
}

export const philippineDestinations: Destination[] = [
  {
    title: "Nurture Wellness Village",
    lat: 14.1247729,
    lng: 120.9419521,
    area: "Tagaytay",
    country: "Philippines",
    category: DestinationCategory.WELLNESS,
  },
  {
    title: "Banaue Rice Terraces",
    lat: 16.924,
    lng: 121.0556,
    area: "Banaue",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Cloud 9",
    lat: 9.806,
    lng: 126.1592,
    area: "Siargao Island",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Chocolate Hills",
    lat: 9.8297,
    lng: 124.1397,
    area: "Bohol",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Underground River",
    lat: 10.1925595,
    lng: 118.9265829,
    area: "Palawan",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Kawasan Falls",
    lat: 9.8024,
    lng: 123.3742,
    area: "Cebu",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Twin Beaches",
    lat: 11.3212,
    lng: 119.4278,
    area: "Palawan",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Boracay",
    lat: 11.9674,
    lng: 121.9248,
    area: "Boracay Island",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Elephant Grounds",
    lat: 14.5519294,
    lng: 121.0463494,
    area: "Taguig",
    country: "Philippines",
    category: DestinationCategory.FOOD_AND_DRINK,
  },
  {
    title: "La Picara",
    lat: 14.5513398,
    lng: 121.0451014,
    area: "Taguig",
    country: "Philippines",
    category: DestinationCategory.FOOD_AND_DRINK,
  },
  {
    title: "The Curator Coffee and Cocktails",
    lat: 14.5543446,
    lng: 121.0160592,
    area: "Makati",
    country: "Philippines",
    category: DestinationCategory.FOOD_AND_DRINK,
  },
  {
    title: "Bank Bar",
    lat: 14.5485245,
    lng: 121.045242,
    area: "Taguig",
    country: "Philippines",
    category: DestinationCategory.FOOD_AND_DRINK,
  },
  {
    title: "Wildflour Restaurant",
    lat: 14.5641947,
    lng: 121.047916,
    area: "Rockwell",
    country: "Philippines",
    category: DestinationCategory.FOOD_AND_DRINK,
  },
  {
    title: "El Nido",
    lat: 11.1906,
    lng: 119.5082,
    area: "Palawan",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
  {
    title: "Sonya's Garden",
    lat: 14.0872961,
    lng: 120.8503496,
    area: "Tagaytay",
    country: "Philippines",
    category: DestinationCategory.WELLNESS,
  },
  {
    title: "Inflatable Island",
    lat: 14.8372047,
    lng: 120.2677499,
    area: "Subic",
    country: "Philippines",
    category: DestinationCategory.ADVENTURE,
  },
];
