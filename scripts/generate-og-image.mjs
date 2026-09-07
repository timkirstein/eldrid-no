#!/usr/bin/env node
// One-off render of og-card.html -> public/images/og-cover.png (1200x630),
// the shared social-share image referenced by every page's og:image meta
// tag. Re-run this manually if og-card.html's design changes; it's not part
// of build.mjs because it needs a real browser (Playwright/Chromium), which
// build.mjs otherwise doesn't depend on.
// Falls back to this sandbox's global install if `npm install` hasn't been
// run at the repo root (playwright is a devDependency here, but nothing else in this
// static site needs a browser, so it's not installed by default).
let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  ({ chromium } = await import('/opt/node22/lib/node_modules/playwright/index.mjs'));
}
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'images');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${join(__dirname, 'og-card.html')}`);
await page.screenshot({ path: join(outDir, 'og-cover.png') });
await browser.close();
console.log('wrote public/images/og-cover.png');
