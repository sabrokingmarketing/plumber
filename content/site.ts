/**
 * ALL BUSINESS TEXT AND CONTACT DETAILS LIVE HERE.
 * Change anything in this file and the whole website updates.
 * Lines marked "TODO" are details still missing from the brief.
 */

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export type Review = { name: string; text: string };
export type ClientLogo = { name: string; file: string };

export const site = {
  name: "Plumber Near Me",
  tagline: "Local plumbing, done properly.",
  description:
    "Plumber Near Me is a local plumbing service based in Krugersdorp, helping homes, schools and businesses across South Africa with plumbing, piping and toilet repairs.",

  // TODO: add your real domain once you have one, e.g. "https://plumbernearme.co.za".
  // Until then the site uses its Vercel address automatically.
  url: "",

  // Brand colours (also set as CSS variables in app/globals.css)
  colours: {
    primary: "#FF6A00", // modern orange: buttons and highlights
    primaryInk: "#C2410C", // darker orange for text links on white (passes contrast)
    secondary: "#111111", // black
  },

  contact: {
    phoneDisplay: "066 220 2498",
    phoneLink: "+27662202498",
    // TODO: confirm this is your WhatsApp number. The brief left WhatsApp empty, so we used your phone number.
    whatsapp: "27662202498",
    whatsappMessage: "Hi Plumber Near Me, I need help with a plumbing problem.",
    email: "kelvin@sabroking.co.za",
    // TODO: add your street address if you want it shown. The brief only says Krugersdorp.
    address: "",
    town: "Krugersdorp, Mogale City, Gauteng",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Krugersdorp%2C%20Gauteng",
    // TODO: add your opening hours, e.g. "Mon to Fri, 07:00 to 17:00".
    hours: "",
    areaServed: "South Africa, countrywide",
  },

  // TODO: add your Facebook, Instagram or LinkedIn links.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  stats: [
    { value: "200", label: "Happy clients" },
    { value: "1+", label: "Years in service" },
    { value: "Local", label: "Based in Krugersdorp" },
    { value: "SA-wide", label: "Countrywide service" },
  ],

  hero: {
    eyebrow: "Local plumbers in Krugersdorp",
    title: "Plumbing, fixed fast.",
    subtitle:
      "Leaks, pipes and toilets sorted by a local team you can actually reach. Send us a WhatsApp and tell us what’s wrong.",
    image: "/images/hero.jpg",
    imageAlt: "A plumber working on the pipes in a modern bathroom",
  },

  reasons: [
    {
      title: "Fast and reliable",
      text: "When something leaks, you need help quickly. We respond fast and turn up when we say we will.",
    },
    {
      title: "We’re local",
      text: "We’re based in Krugersdorp, so you deal with real people from your area, not a call centre.",
    },
    {
      title: "Over a year of service",
      text: "More than a year of plumbing work and 200 happy clients so far, from homes to schools to businesses.",
    },
  ],

  audiences: [
    {
      title: "Schools",
      text: "Bathrooms, taps and pipes that keep working for learners and staff.",
    },
    {
      title: "Business owners",
      text: "Quick fixes so leaks and blocked toilets don’t slow your business down.",
    },
    {
      title: "Homes",
      text: "Anyone with a plumbing problem, big or small. Tell us what’s wrong.",
    },
  ],

  services: [
    {
      slug: "plumbing",
      name: "Plumbing",
      short: "Leaks, taps, drains and general plumbing repairs.",
      description:
        "From a dripping tap to a leak under the sink, we find the problem and fix it properly so it doesn’t come back next week.",
      points: ["Leaks and drips", "Taps and mixers", "Sinks and drains", "General repairs"],
      image: "/images/service-plumbing.jpg",
      imageAlt: "A plumber fixing the pipes under a bathroom basin",
    },
    {
      slug: "piping",
      name: "Piping",
      short: "New pipes, pipe repairs and replacements.",
      description:
        "Burst, old or leaking pipes cause damage fast. We repair, replace and install pipework so your water runs where it should.",
      points: ["Burst pipe repairs", "Pipe replacements", "New pipe installations", "Fittings and joints"],
      image: "/images/service-piping.jpg",
      imageAlt: "Close-up of hands fitting steel water pipes",
    },
    {
      slug: "toilets",
      name: "Toilets",
      short: "Toilet repairs, blockages and installations.",
      description:
        "Running, leaking or blocked toilets are no fun. We repair what’s broken and install new toilets when it’s time to replace.",
      points: ["Blocked toilets", "Running or leaking cisterns", "Toilet replacements", "New toilet installations"],
      image: "/images/service-toilets.jpg",
      imageAlt: "A plumber in work gloves fitting a wall-mounted toilet",
    },
  ] as Service[],

  // Stock photos for now. TODO: replace these with photos of your own jobs.
  gallery: [
    { src: "/images/work-1.jpg", alt: "Water pipes, valves and pressure gauges in a plant room" },
    { src: "/images/work-2.jpg", alt: "A plumber in gloves tightening a pipe fitting" },
    { src: "/images/work-3.jpg", alt: "A hand turning on a modern kitchen tap" },
    { src: "/images/work-4.jpg", alt: "A plumber working on the pipes inside a cabinet" },
    { src: "/images/work-5.jpg", alt: "A plumber shaping a copper pipe in a vice" },
  ],

  // TODO: add real customer reviews with first names. The reviews section stays hidden until you do.
  reviews: [] as Review[],

  // TODO: add client logos to public/images/clients and list them here to show a "Trusted by" strip.
  clientLogos: [] as ClientLogo[],

  faqs: [
    {
      q: "Which areas do you work in?",
      a: "We’re based in Krugersdorp and we help clients across South Africa. Send us your area on WhatsApp and we’ll let you know.",
    },
    {
      q: "What can you help with?",
      a: "General plumbing repairs, piping (repairs, replacements and new pipes) and toilets (blockages, leaks, repairs and new installations).",
    },
    {
      q: "Do you work for schools and businesses?",
      a: "Yes. We work for schools, business owners and homeowners. Anyone with a plumbing problem is welcome to get in touch.",
    },
    {
      q: "How do I get a quote?",
      a: "WhatsApp or call us and tell us what’s wrong. A photo or short video of the problem helps us understand it faster.",
    },
    {
      q: "How quickly can you help?",
      a: "Being fast and reliable is the reason our clients choose us. Get in touch and we’ll tell you when we can be there.",
    },
  ],
};

export const whatsappLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;
export const phoneLink = `tel:${site.contact.phoneLink}`;
export const emailLink = `mailto:${site.contact.email}`;

export const siteUrl = (
  site.url ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
