// Build-time only: renders a page to HTML so search engines receive
// real content instead of an empty shell. See scripts/prerender.mjs.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

export { getRoutes, getSeo, renderHeadTags, SITE_URL } from "./seo.js";
