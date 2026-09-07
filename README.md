# eldrid.no

Landing page and blog for [Eldrid](https://eldrid.no) — a Norwegian app that
helps elderly people and their families spot fraud. Static site, deployed to
GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

The Eldrid app itself lives in a separate, private repository; this repo is
just the public marketing site + blog.

## Structure

- `content/site.mjs` — site-wide constants (name, nav, colors).
- `content/posts.mjs` — blog post content. Add a post by pushing another
  object into the `posts` array.
- `build.mjs` — generates `public/**/*.html`, `sitemap.xml` and `llms.txt`
  from the content above.
- `public/` — generated output, served by GitHub Pages. Also holds the
  static assets `build.mjs` doesn't touch: `css/`, `js/`, `favicon.svg`,
  `images/`, `robots.txt`.
- `scripts/generate-og-image.mjs` — one-off Playwright render of
  `scripts/og-card.html` into `public/images/og-cover.png` (the shared
  social-share image). Re-run manually if the card's design changes.

## Develop

```sh
node build.mjs   # regenerate public/ from content/
```

Then open `public/index.html` in a browser, or serve the folder with any
static file server (e.g. `npx serve public`) to test navigation and the
interest form.

## Interest form

`public/js/interest-form.js` writes directly to the `interestSignups`
Firestore collection in the **seniorvakt** Firebase project (the app's own
project — this site has no backend of its own). Web app credentials live in
`public/js/firebase-config.js`; the form falls back to a `mailto:` link if
those are still placeholders.
