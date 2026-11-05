// ─────────────────────────────────────────────────────────────
// SEO: page titles, descriptions, social-sharing tags and
// structured data for every page. Used twice:
//   1. at build time by scripts/prerender.mjs, which writes a real
//      HTML file for each page with these tags in <head>;
//   2. in the browser by components/Seo.jsx, which updates the tags
//      as visitors move between pages.
// Blog posts and contact details come from the CMS content, so new
// posts get their own tags automatically.
// ─────────────────────────────────────────────────────────────
import general from "./content/settings/general.json";
import { blogs, blogsData } from "./config/blogs";

export const SITE_URL = "https://buyersmatch.com.au";
export const SITE_NAME = "BuyersMatch";
const DEFAULT_IMAGE = "/og-image.jpg";

const STATIC_PAGES = {
  "/": {
    title: "BuyersMatch | Buyer's Agent for Property Investors Across Australia",
    description:
      "BuyersMatch is a buyer's agent helping investors find, assess and secure high-growth investment properties across Australia. Book an initial consultation.",
    changefreq: "weekly",
    priority: "1.0",
  },
  "/blog": {
    title: "Property Investment Blog | BuyersMatch",
    description:
      "Practical articles on building a property portfolio, choosing growth locations, insurance and working with a buyer's agent, from the BuyersMatch team.",
    changefreq: "weekly",
    priority: "0.8",
  },
  "/case-studies": {
    title: "Results and Case Studies | BuyersMatch",
    description:
      "Investment properties secured for BuyersMatch clients across Australia, with purchase prices, current values and rental yields.",
    changefreq: "monthly",
    priority: "0.8",
  },
  "/cashflow-calculator": {
    title: "Investment Property Cashflow Calculator | BuyersMatch",
    description:
      "Estimate the cashflow of an investment property, including rent, loan repayments, expenses and tax, with the free BuyersMatch calculator.",
    changefreq: "monthly",
    priority: "0.7",
  },
  "/privacy-policy": {
    title: "Privacy Policy | BuyersMatch",
    description: "How BuyersMatch collects, uses and protects your personal information.",
    changefreq: "yearly",
    priority: "0.2",
  },
  "/terms": {
    title: "Terms of Service | BuyersMatch",
    description: "The terms that apply when you use the BuyersMatch website and services.",
    changefreq: "yearly",
    priority: "0.2",
  },
  "/disclaimer": {
    title: "Disclaimer | BuyersMatch",
    description: "Important information about the general nature of content on the BuyersMatch website.",
    changefreq: "yearly",
    priority: "0.2",
  },
};

const absolute = (path) =>
  !path ? `${SITE_URL}${DEFAULT_IMAGE}` : /^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

const clip = (text, max = 160) => {
  const t = String(text || "").replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
};

// e.g. "Gold Coast, QLD" or "Southport, QLD 4215" → structured address
const parseAddress = (raw) => {
  const m = String(raw || "").match(/^\s*(.+?),\s*([A-Z]{2,3})\s*(\d{4})?\s*$/);
  if (!m) return { "@type": "PostalAddress", streetAddress: raw, addressCountry: "AU" };
  return {
    "@type": "PostalAddress",
    addressLocality: m[1],
    addressRegion: m[2],
    ...(m[3] ? { postalCode: m[3] } : {}),
    addressCountry: "AU",
  };
};

const BUSINESS_PROFILES = ["facebook", "instagram", "youtube", "tiktok"];

const organisationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  description: STATIC_PAGES["/"].description,
  email: general.contact.email,
  telephone: general.contact.phones?.[0]?.number,
  address: parseAddress(general.contact.address),
  areaServed: { "@type": "Country", name: "Australia" },
  sameAs: (general.socials || [])
    .filter((s) => BUSINESS_PROFILES.includes(s.name))
    .map((s) => s.url),
});

const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
});

const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
});

const normalise = (pathname) => {
  const p = String(pathname || "/").split(/[?#]/)[0].replace(/\/+$/, "");
  return p === "" ? "/" : p;
};

/** All page URLs to pre-render and list in the sitemap. */
export function getRoutes() {
  return [
    ...Object.keys(STATIC_PAGES).map((path) => ({
      path,
      changefreq: STATIC_PAGES[path].changefreq,
      priority: STATIC_PAGES[path].priority,
    })),
    ...blogs.map((b) => ({
      path: `/blog/${b.id}`,
      lastmod: b.isoDate,
      changefreq: "yearly",
      priority: "0.6",
    })),
  ];
}

/** Title, description, canonical, image and structured data for a path. */
export function getSeo(pathname) {
  const path = normalise(pathname);
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = blogsData[blogMatch[1]];
    if (post) {
      return {
        title: `${post.title} | BuyersMatch`,
        description: clip(post.excerpt || post.body),
        canonical,
        image: absolute(post.image),
        type: "article",
        publishedTime: post.isoDate,
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: clip(post.excerpt || post.body),
            image: absolute(post.image),
            datePublished: post.isoDate,
            dateModified: post.isoDate,
            mainEntityOfPage: canonical,
            author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumbSchema([["Home", "/"], ["Blog", "/blog"], [post.title, path]]),
        ],
      };
    }
  }

  const page = STATIC_PAGES[path];
  if (!page) {
    return {
      title: "Page not found | BuyersMatch",
      description: STATIC_PAGES["/"].description,
      canonical,
      image: absolute(DEFAULT_IMAGE),
      type: "website",
      noindex: true,
      jsonLd: [],
    };
  }

  const jsonLd =
    path === "/"
      ? [organisationSchema(), websiteSchema()]
      : [breadcrumbSchema([["Home", "/"], [page.title.replace(/ \| BuyersMatch$/, ""), path]])];

  return {
    title: page.title,
    description: page.description,
    canonical,
    image: absolute(DEFAULT_IMAGE),
    type: "website",
    jsonLd,
  };
}

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** The <head> tags for a page, as an HTML string (used at build time). */
export function renderHeadTags(seo) {
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<link rel="canonical" href="${esc(seo.canonical)}" />`,
    seo.noindex ? `<meta name="robots" content="noindex" />` : `<meta name="robots" content="index, follow" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_AU" />`,
    `<meta property="og:type" content="${esc(seo.type)}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${esc(seo.canonical)}" />`,
    `<meta property="og:image" content="${esc(seo.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(seo.image)}" />`,
  ];
  if (seo.publishedTime) {
    tags.push(`<meta property="article:published_time" content="${esc(seo.publishedTime)}" />`);
  }
  for (const block of seo.jsonLd || []) {
    tags.push(
      `<script type="application/ld+json" data-seo="jsonld">${JSON.stringify(block).replace(/</g, "\\u003c")}</script>`
    );
  }
  return tags.join("\n    ");
}
