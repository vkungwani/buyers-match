import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeo } from "../seo";

// Keeps the page title, description, canonical link, social-sharing
// tags and structured data in step with the current page as visitors
// navigate around the site. (The first page load already has them,
// written in by the build-time pre-render.)
const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.noindex ? "noindex" : "index, follow");
    setMeta("property", "og:type", seo.type);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", seo.canonical);
    setMeta("property", "og:image", seo.image);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", seo.image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.canonical);

    document.head.querySelectorAll('script[data-seo="jsonld"]').forEach((s) => s.remove());
    for (const block of seo.jsonLd || []) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seo = "jsonld";
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
}
