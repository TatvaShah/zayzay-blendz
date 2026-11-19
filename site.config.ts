import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "ZayZayBlendz",
  tagline: "Home based haircuts, fades and beard work in Scarborough.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://zayzay-blendz-ca.vercel.app",

  theme: {
    preset: "barber-bold",
  },

  hero: {
    eyebrow: "Home based barbering in Scarborough",
    headline: "Haircuts, fades and beard work",
    subhead: "ZayZayBlendz is a home based Scarborough barber offering haircuts, fades, buzz cuts, curly cuts and beard work. A November 18 post listed haircuts at $25 and a haircut and beard at $30. Book through the booking page, or send an Instagram message.",
    images: [
      { src: "/images/post-8.jpg", alt: "A curly fade haircut from ZayZayBlendz in Scarborough", width: 1080, height: 1920 },
      { src: "/images/post-2.jpg", alt: "A curly cut from ZayZayBlendz in Scarborough", width: 720, height: 1280 },
      { src: "/images/post-5.jpg", alt: "A haircut from ZayZayBlendz in Scarborough", width: 640, height: 1136 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Haircuts posted at $25",
    "Haircut and beard posted at $30",
    "Fades, buzz cuts and curly cuts",
    "Home based in Scarborough",
  ],

  about: {
    title: "Welcome to ZayZayBlendz",
    body: [
      "ZayZayBlendz is a home based Scarborough barber offering haircuts, fades, buzz cuts, curly cuts and beard work. A November 18 post listed haircuts at $25 and a haircut and beard at $30.",
      "Book through the booking page, or send an Instagram message.",
    ],
    image: { src: "/images/post-8.jpg", alt: "A curly fade haircut from ZayZayBlendz in Scarborough", width: 1080, height: 1920 },
  },

  menu: {
    label: "Services",
    title: "Cuts and beard work",
    variant: "list",
    showPrices: false,
    priceNote: "Prices below were posted on November 18, 2026, and may change. Book through the booking page, or send an Instagram message.",
    groups: [
      {
        title: "Services",
        items: [
          { name: "Haircut", description: "Posted at $25 on November 18." },
          { name: "Haircut and beard", description: "Posted at $30 on November 18." },
          { name: "Fades, buzz cuts and curly cuts" },
        ],
      },
    ],
    footnote: "Home based in Scarborough.",
  },

  gallery: {
    title: "Recent cuts",
    items: [
      { src: "/images/post-8.jpg", width: 1080, height: 1920, alt: "A curly fade haircut from ZayZayBlendz in Scarborough", caption: "A curly fade", href: "https://www.instagram.com/reel/DXcHs9BCSi2/" },
      { src: "/images/post-2.jpg", width: 720, height: 1280, alt: "A curly cut from ZayZayBlendz in Scarborough", caption: "A curly cut", href: "https://www.instagram.com/reel/Df3blWuJWsj/" },
      { src: "/images/post-5.jpg", width: 640, height: 1136, alt: "A haircut from ZayZayBlendz in Scarborough", caption: "A summer cut", href: "https://www.instagram.com/reel/DZ2sbNLJ4Iq/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "zayzayblendz",
    embeds: ["https://www.instagram.com/reel/DXcHs9BCSi2/", "https://www.instagram.com/reel/Df3blWuJWsj/", "https://www.instagram.com/reel/Df3dpM2pfUa/"],
  },

  order: {
    label: "How to book",
    title: "Book a cut",
    intro: "Book through the booking page, or send an Instagram message. ZayZayBlendz is home based in Scarborough.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi ZayZayBlendz! I would like to book a cut.\nPreferred day and time:\nHaircut or haircut and beard:",
    links: [
      { label: "Book now", href: "https://zayzayblendz.setmore.com" },
      { label: "Message on Instagram", href: "https://ig.me/m/zayzayblendz" },
    ],
    note: "Home based in Scarborough.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the booking page, or send an Instagram message." },
    { q: "What are the prices?", a: "A November 18 post listed haircuts at $25 and a haircut and beard at $30." },
    { q: "Where are you based?", a: "ZayZayBlendz is a home based Scarborough barber." },
  ],

  contact: {
    title: "Contact",
    area: "Scarborough, Toronto, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/zayzayblendz/" },
    ],
  },

  seo: {
    title: "ZayZayBlendz | Home based haircuts and fades in Scarborough",
    description: "Home based Scarborough barber offering haircuts, fades and beard work. Haircuts posted at $25, haircut and beard at $30. Book online or by Instagram DM.",
    keywords: ["ZayZayBlendz", "Scarborough barber", "home based barber Scarborough", "fades Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
