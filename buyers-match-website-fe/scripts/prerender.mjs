// ─────────────────────────────────────────────────────────────
// Pre-render: after the normal build, write a real HTML file for
// every page (home, blog list, each blog post, case studies,
// calculator, policy pages) with its own title, description,
// social tags and structured data, plus sitemap.xml and robots.txt.
//
// Optional Netlify environment variables (Site configuration →
// Environment variables), read at build time:
//   GA_MEASUREMENT_ID         e.g. G-XXXXXXXXXX  → adds Google Analytics 4
//   GOOGLE_SITE_VERIFICATION  Search Console "HTML tag" code → adds the
//                             verification meta tag (not needed if the
//                             domain is verified by DNS)
// ─────────────────────────────────────────────────────────────
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssrEntry = (await fs.readdir(ssrDir)).find((f) => /^entry-server\.(m?js)$/.test(f));
if (!ssrEntry) throw new Error("Pre-render: server bundle not found in dist-ssr/");
const { render, getRoutes, getSeo, renderHeadTags, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, ssrEntry)).href
);

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error('Pre-render: <div id="root"></div> not found in dist/index.html');
}

const gaId = (process.env.GA_MEASUREMENT_ID || "").trim();
const gscCode = (process.env.GOOGLE_SITE_VERIFICATION || "").trim();
const globalHead = [];
if (gscCode) {
  globalHead.push(`<meta name="google-site-verification" content="${gscCode.replace(/"/g, "")}" />`);
}
if (/^G-[A-Z0-9]+$/i.test(gaId)) {
  globalHead.push(
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>`,
    `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');</script>`
  );
}

const buildPage = (url, appHtml) => {
  const head = [renderHeadTags(getSeo(url)), ...globalHead].join("\n    ");
  return template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta name="description"[^>]*>/, "")
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
};

const routes = getRoutes();
let failed = 0;
for (const route of routes) {
  try {
    const html = buildPage(route.path, render(route.path));
    // Written as both /page/index.html and /page.html so the host can
    // serve /page directly, with or without a trailing slash.
    const outFiles =
      route.path === "/"
        ? [path.join(dist, "index.html")]
        : [path.join(dist, route.path, "index.html"), path.join(dist, `${route.path}.html`)];
    for (const outFile of outFiles) {
      await fs.mkdir(path.dirname(outFile), { recursive: true });
      await fs.writeFile(outFile, html);
    }
    console.log(`  pre-rendered ${route.path}`);
  } catch (err) {
    failed++;
    console.error(`  FAILED ${route.path}: ${err.message}`);
  }
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
await fs.writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`Pre-render: ${routes.length - failed}/${routes.length} pages, sitemap.xml, robots.txt`);
if (failed) process.exit(1);
