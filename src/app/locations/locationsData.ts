export type LocationType = "online" | "physical";

export type LocationItem = {
  id: string;
  name: string;
  type: LocationType;
  address?: string;
  city?: string;
  region?: string;
  country?: string;
  lat?: number;
  lng?: number;
  serviceTimes?: string;
  slug?: string;
  ctaUrl?: string;
};

export const locations: LocationItem[] = [
  {
    id: "saltcity-online",
    name: "SaltCity Online",
    type: "online",
    ctaUrl: "https://chat.whatsapp.com/BzDAhudAQ3oHblsdtPgwIV?mode=gi_t",
    serviceTimes: "Sundays 9:00 AM (WAT)",
  },
  {
    id: "saltcity-warri",
    name: "SaltCity Central — Warri",
    type: "physical",
    address: "20 Okumagba Ave, Warri 332104, Delta",
    city: "Warri",
    region: "Delta",
    country: "Nigeria",
    lat: 5.529802967900948,
    lng: 5.741930554276473,
    serviceTimes: "Wed 5:00 PM • Fri 5:00 PM • Sun 9:00 AM (WAT)",
    slug: "warri-central",
  },
  {
    id: "saltcity-sapele",
    name: "SaltCity — Sapele",
    type: "physical",
    address: "110 Sapele-Warri Rd, Sapele, 331107, Delta",
    city: "Sapele",
    region: "Delta",
    country: "Nigeria",
    lat: 5.879486636186575,
    lng: 5.698460446593333,
    serviceTimes: "Thur 9:00 AM (WAT)",
    slug: "sapele",
  },
];