export const BUSINESS = {
  name: "Barry Hand Car Wash",
  shortName: "Barry",
  phone: "07518199557",
  phoneIntl: "+447518199557",
  address: "182-190 Barry Road, Barry, CF62 9BE",
  street: "182-190 Barry Road",
  city: "Barry",
  postcode: "CF62 9BE",
  hours: [
    { days: "Monday – Saturday", time: "8:30am – 6:00pm" },
    { days: "Sunday", time: "9:00am – 5:00pm" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=182-190%20Barry%20Road%2C%20Barry%2C%20CF62%209BE&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapDirections:
    "https://www.google.com/maps/dir/?api=1&destination=182-190+Barry+Road,+Barry,+CF62+9BE",
  rating: "4.7",
  reviewCount: 22,
};

export const reviewUrl = "https://www.google.com/maps?cid=1192728031576523538";

export const tel = (b = BUSINESS) => `tel:${b.phoneIntl}`;

export const NAV_LINKS = [
  { label: "Prices", href: "#prices" },
  { label: "Loyalty", href: "#loyalty" },
  { label: "The Wash", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Find Us", href: "#visit" },
];

export const MARQUEE_ITEMS = [
  "100% Hand Wash Only",
  "Under New Management",
  "Free Air Freshener With Every Wash",
  "Open 7 Days A Week",
  "No Booking Needed — Just Turn Up",
  "4 Stamps = 5th Wash & Dry Free",
];
