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
    ctaUrl: "https://youtube.com/@saltcitycentral",
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
    id: "saltcity-lagos",
    name: "SaltCity — Lagos (Coming Soon)",
    type: "physical",
    address: "Victoria Island, Lagos (placeholder)",
    city: "Lagos",
    region: "Lagos",
    country: "Nigeria",
    lat: 6.4281,
    lng: 3.4219,
    serviceTimes: "Sun 10:00 AM (WAT) — placeholder",
    slug: "lagos",
  },
  {
    id: "saltcity-abuja",
    name: "SaltCity — Abuja (Coming Soon)",
    type: "physical",
    address: "Wuse 2, Abuja (placeholder)",
    city: "Abuja",
    region: "FCT",
    country: "Nigeria",
    lat: 9.0765,
    lng: 7.3986,
    serviceTimes: "Sun 9:00 AM (WAT) — placeholder",
    slug: "abuja",
  },
];
