// ─────────────────────────────────────────────────────────────
// Site data is now managed through the CMS (/admin).
// The editable content lives in src/content/*.json — edit it in
// the CMS rather than here. This file just assembles it into the
// shape the components expect.
// ─────────────────────────────────────────────────────────────
import general from "../content/settings/general.json";
import credentials from "../content/home/credentials.json";
import successStories from "../content/results/success-stories.json";
import videos from "../content/testimonials/videos.json";
import { blogs } from "./blogs";

export const siteData = {
  name: general.siteName,
  logoText: "BM",
  credentials: credentials.items.map((c) => ({
    id: c.icon,
    title: c.title,
    sub: c.sub,
  })),
  contact: {
    address: general.contact.address,
    email: general.contact.email,
    calendly: general.contact.calendly,
    phones: general.contact.phones.map((p) => p.number),
    phoneContacts: general.contact.phones,
  },
  socials: general.socials,
  videoTestimonials: videos.items.map((v, i) => ({
    id: i + 1,
    name: v.name,
    subheading: v.subheading,
    quote: "",
    youtubeId: v.youtubeId,
    image: `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`,
  })),
  whatsappMessageInfo: general.whatsapp,
  successStories: successStories.items,
  blogs: blogs.map(({ id, title, image, date, excerpt }) => ({
    id,
    title,
    image,
    date,
    excerpt,
  })),
  reviews: [],
};
