#!/usr/bin/env node
// Generates the static eldrid.no site (public/**/*.html, sitemap.xml,
// llms.txt) from the content in content/*.mjs.
//
// Usage: node build.mjs
//
// There's no client-side framework here on purpose -- this is a marketing +
// blog site whose main job is to be crawled and cited (by Google and by AI
// answer engines), so plain, fast, static HTML beats a JS-rendered SPA. This
// script exists only so the header/footer/SEO boilerplate isn't copy-pasted
// across eleven HTML files by hand.

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { site, nav } from './content/site.mjs';
import { posts } from './content/posts.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, 'public');

const dateFormatter = new Intl.DateTimeFormat('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' });
const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

// ---------- small HTML helpers ----------

function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function jsonLd(objOrArray) {
  const arr = Array.isArray(objOrArray) ? objOrArray : [objOrArray];
  return arr.map(obj => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join('\n');
}

function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.baseUrl,
    logo: `${site.baseUrl}/favicon.svg`,
    description: site.description,
    email: site.email,
    areaServed: 'NO',
  };
}

function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.baseUrl}${item.path}`,
    })),
  };
}

function faqLd(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// ---------- layout ----------

function header(activePath) {
  const links = nav
    .map(item => `<li><a href="${item.href}"${item.href === activePath ? ' aria-current="page"' : ''}>${esc(item.label)}</a></li>`)
    .join('');
  return `
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="/">
        <img class="mark" src="/favicon.svg" alt="" width="34" height="34">
        ${esc(site.name)}
      </a>
      <nav class="site-nav" aria-label="Hovedmeny">
        <ul>${links}</ul>
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div>
        <strong>${esc(site.name)}</strong> — en digital rådgiver mot svindel, laget for eldre og deres pårørende.
      </div>
      <ul>
        <li><a href="/blogg/">Blogg</a></li>
        <li><a href="/personvern/">Personvern</a></li>
        <li><a href="mailto:${site.email}">${site.email}</a></li>
      </ul>
    </div>
  </footer>`;
}

function page({ path, title, description, activePath, bodyHtml, jsonLdBlocks = [], ogImage = '/images/og-cover.png', extraHead = '' }) {
  const url = `${site.baseUrl}${path}`;
  const fullTitle = path === '/' ? `${site.name} — ${site.tagline}` : `${title} · ${site.name}`;
  return `<!doctype html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.baseUrl}${ogImage}">
<meta property="og:locale" content="${site.locale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.baseUrl}${ogImage}">
<link rel="stylesheet" href="/css/style.css">
${extraHead}
${jsonLd([organizationLd(), ...jsonLdBlocks])}
</head>
<body>
<a class="skip-link" href="#main">Hopp til hovedinnhold</a>
${header(activePath)}
<main id="main">
${bodyHtml}
</main>
${footer()}
</body>
</html>`;
}

// ---------- home page ----------

const homeFaq = [
  {
    q: 'Er Eldrid trygt å bruke?',
    a: 'Ja. Eldrid er laget med et rådgivende, ikke-dømmende svar som mål, aldri et skremmende rødt/grønt lys. Informasjonen du deler brukes kun til å vurdere meldingen din og lagres trygt i EU — den selges aldri videre.',
  },
  {
    q: 'Koster Eldrid noe?',
    a: 'Eldrid er foreløpig i tidlig fase, og alle som melder interesse får tilgang som en del av en gratis tidligfase. Et abonnement vil aldri kreve en tilkoblet pårørende — en senior kan bruke og eventuelt betale for Eldrid helt på egen hånd.',
  },
  {
    q: 'Må jeg laste ned en egen app for å bruke Eldrid?',
    a: 'Eldrid lanseres som en app for iOS og Android, der du deler skjermbilder direkte fra delingsmenyen du allerede kjenner. Meld interesse på denne siden, så gir vi deg beskjed så snart du kan komme i gang.',
  },
  {
    q: 'Fungerer Eldrid uten at en pårørende er koblet til?',
    a: 'Ja. En senior kan bruke Eldrid helt på egen hånd, uten noen tilknyttet pårørende. Å legge til en pårørende for varsling og en "ring hjelpen min"-knapp er alltid valgfritt.',
  },
  {
    q: 'Hvilke typer meldinger kan jeg sjekke med Eldrid?',
    a: 'SMS, e-post, meldinger i sosiale medier, annonser, profiler og til og med fysiske brev — ta et skjermbilde eller, for e-post, videresend den direkte til Eldrid.',
  },
];

function renderHome() {
  const latestPosts = sortedPosts.slice(0, 3);

  const body = `
  <section class="hero">
    <div class="wrap">
      <div>
        <span class="eyebrow">Trygghet mot svindel</span>
        <h1>Fikk du en mistenkelig melding?<br>Spør Eldrid før du svarer.</h1>
        <p class="lede">Eldrid er en digital rådgiver som på sekunder vurderer om en SMS, e-post, annonse eller telefonsamtale-oppfølging er svindel — laget for eldre og deres pårørende, uten skam og uten skjenn.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#interessert">Meld interesse</a>
          <a class="btn btn-secondary" href="#slik-fungerer-det">Se hvordan det fungerer</a>
        </div>
      </div>
      <div class="hero-card" aria-hidden="true">
        <div class="chat-bubble from-user">📷 Delte et skjermbilde: «Vipps: Du skylder restskatt, betal her»</div>
        <div class="chat-bubble from-eldrid">
          Dette ser ut som svindel. Skatteetaten ber aldri om betaling via Vipps etter en telefonsamtale eller SMS.
          <div class="verdict fraud">🚩 BEDRAGERI</div>
        </div>
      </div>
    </div>
  </section>

  <section class="alt" id="problemet">
    <div class="wrap">
      <h2 class="section-title">Svindel mot eldre er ikke lenger unntaket</h2>
      <p class="section-lede">Svindlere retter seg systematisk mot eldre — med falske politi- og bankoppringninger, Vipps-meldinger, kjærlighetssvindel og KI-klonede stemmer. Tallene fra norske myndigheter og banker snakker for seg.</p>
      <div class="stat-grid">
        <div class="stat-card">
          <span class="num">~200 000</span>
          <span class="label">nordmenn oppgir å ha vært utsatt for digital svindel</span>
          <cite><a href="https://www.nkvts.no/aktuelt/hundretusener-av-eldre-er-utsatt-for-okonomisk-svindel/" target="_blank" rel="noopener">Kilde: NKVTS</a></cite>
        </div>
        <div class="stat-card">
          <span class="num">28 mill. kr</span>
          <span class="label">svindlet fra 150 eldre av ett nettverk som utga seg for politi og bank</span>
          <cite><a href="https://www.document.no/2026/07/10/elleve-personer-domt-for-svindel-av-eldre-for-28-millioner-kroner/" target="_blank" rel="noopener">Kilde: document.no</a></cite>
        </div>
        <div class="stat-card">
          <span class="num">2,1 mrd. kr</span>
          <span class="label">tapt til investeringssvindel i 2024, opp fra 864 mill. i 2020</span>
          <cite><a href="https://www.gjensidige.no/godtforberedt/okonomi/mange-nordmenn-blir-rundlurt-av-denne-svindelen" target="_blank" rel="noopener">Kilde: Gjensidige</a></cite>
        </div>
      </div>
    </div>
  </section>

  <section id="slik-fungerer-det">
    <div class="wrap">
      <h2 class="section-title">Slik fungerer Eldrid</h2>
      <p class="section-lede">Ingen nytt passord å huske, ingen kompliserte menyer — bare den delingsmenyen du allerede kjenner fra bilder og meldinger.</p>
      <div class="steps">
        <div class="step-card">
          <div class="step-num">1</div>
          <h3>Ta et skjermbilde — eller videresend e-posten</h3>
          <p>Fikk du en mistenkelig SMS, e-post, annonse eller melding? Ta et skjermbilde, eller videresend e-posten direkte til din egen Eldrid-adresse.</p>
        </div>
        <div class="step-card">
          <div class="step-num">2</div>
          <h3>Del det med Eldrid</h3>
          <p>Del bildet til Eldrid akkurat som du deler et bilde til en hvilken som helst annen app — samme kjente delingsmeny.</p>
        </div>
        <div class="step-card">
          <div class="step-num">3</div>
          <h3>Få et klart svar på sekunder</h3>
          <p>Eldrid forklarer i vanlig språk hva den ser, og hva du bør gjøre videre — og spør om mer informasjon hvis noe er uklart, ett spørsmål av gangen.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="alt">
    <div class="wrap">
      <h2 class="section-title">Et rådgivende svar, ikke et skremmende rødt lys</h2>
      <p class="section-lede">Eldrid svarer alltid med ett av tre, tydelig forklarte utfall — aldri bare "farlig" eller "trygt".</p>
      <div class="verdict-grid">
        <div class="verdict-card fraud">
          <h3>🚩 Bedrageri</h3>
          <p>Dette ser klart ut som svindel. Eldrid forklarer hvorfor, og hva du bør gjøre — for eksempel å ikke svare, og heller kontakte banken selv.</p>
        </div>
        <div class="verdict-card unsure">
          <h3>❓ Usikker</h3>
          <p>Eldrid trenger litt mer informasjon, og stiller ett konkret oppfølgingsspørsmål av gangen for å komme til et klart svar.</p>
        </div>
        <div class="verdict-card safe">
          <h3>✅ Ekte</h3>
          <p>Meldingen ser ut til å være ekte. Du kan senke skuldrene, med en kort forklaring på hvorfor.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="paarorende">
    <div class="wrap split">
      <div>
        <h2 class="section-title" style="text-align:left">For deg som er pårørende</h2>
        <p style="color:var(--text-muted); font-size:19px; margin-top:0;">Du kan ikke sjekke telefonen til noen andre hele tiden. Eldrid gir deg trygghet uten å måtte overvåke.</p>
        <ul class="check-list">
          <li>Få varsel automatisk hvis noe ser tydelig farlig ut — ikke ved hver eneste melding.</li>
          <li>En "Ring hjelpen min"-knapp gir raskt kontakt med deg i en akutt situasjon.</li>
          <li>Helt valgfritt å koble til: Eldrid fungerer fullt ut for en senior som ønsker å klare seg selv.</li>
          <li>Et abonnement er aldri avhengig av en pårørende — den eldre kan eie sitt eget forhold til Eldrid.</li>
        </ul>
      </div>
      <div class="hero-card" aria-hidden="true">
        <div class="chat-bubble from-eldrid">🔔 Varsel til deg: Mor delte en melding som ser ut som tydelig svindel. Vi anbefalte henne å ikke svare og å ringe banken selv.</div>
        <div class="chat-bubble from-user">☎️ Ring hjelpen min — trykket av mor kl. 19:42</div>
      </div>
    </div>
  </section>

  <section class="alt">
    <div class="wrap">
      <h2 class="section-title">Ferskt fra bloggen</h2>
      <p class="section-lede">Vi følger med på nye svindelmetoder rettet mot eldre i Norge, og forklarer hvordan du kjenner dem igjen.</p>
      <div class="post-grid">
        ${latestPosts.map(postCard).join('\n')}
      </div>
      <p style="text-align:center; margin-top:32px;"><a class="btn btn-secondary" href="/blogg/">Se alle artikler</a></p>
    </div>
  </section>

  <section id="faq">
    <div class="wrap">
      <h2 class="section-title">Ofte stilte spørsmål</h2>
      <div style="max-width:760px; margin: 0 auto;">
        ${homeFaq.map(f => `<details class="faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="alt" id="interessert">
    <div class="wrap">
      <h2 class="section-title">Meld interesse</h2>
      <p class="section-lede">Vi åpner for flere brukere fortløpende. Legg igjen navn og e-post, så gir vi deg beskjed så snart du kan komme i gang — helt uforpliktende.</p>
      <div class="form-card">
        <form id="interest-form" novalidate>
          <div class="form-row">
            <label for="name">Navn</label>
            <input type="text" id="name" name="name" autocomplete="name" required>
          </div>
          <div class="form-row">
            <label for="email">E-post</label>
            <input type="email" id="email" name="email" autocomplete="email" required>
          </div>
          <div class="form-row">
            <label for="phone">Telefon (valgfritt)</label>
            <input type="tel" id="phone" name="phone" autocomplete="tel">
          </div>
          <div class="form-row">
            <label>Jeg melder interesse som</label>
            <div class="radio-group">
              <label><input type="radio" name="role" value="senior" required> Senior, for meg selv</label>
              <label><input type="radio" name="role" value="relative"> Pårørende</label>
              <label><input type="radio" name="role" value="other"> Annet</label>
            </div>
          </div>
          <div class="form-row consent-row">
            <input type="checkbox" id="consent" name="consent" required>
            <label for="consent">Jeg samtykker til å bli kontaktet om Eldrid, og har lest <a href="/personvern/">personvernerklæringen</a>.</label>
          </div>
          <button class="btn btn-primary" type="submit" style="width:100%;">Meld interesse</button>
        </form>
        <div class="form-status" id="interest-form-status" role="status" aria-live="polite"></div>
      </div>
    </div>
  </section>
  <script type="module" src="/js/interest-form.js"></script>
  `;

  return page({
    path: '/',
    title: site.tagline,
    description: site.description,
    activePath: '/',
    bodyHtml: body,
    jsonLdBlocks: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        url: site.baseUrl,
        description: site.description,
        inLanguage: 'nb-NO',
      },
      faqLd(homeFaq),
    ],
  });
}

function postCard(post) {
  return `<a class="post-card" href="/blogg/${post.slug}/">
    <span class="tag">${esc(post.tags[0] || 'Svindel')}</span>
    <h3>${esc(post.title)}</h3>
    <p>${esc(post.description)}</p>
    <time datetime="${post.date}">${dateFormatter.format(new Date(post.date))}</time>
  </a>`;
}

// ---------- blog index ----------

function renderBlogIndex() {
  const body = `
  <section class="article-header">
    <div class="wrap">
      <span class="eyebrow">Bloggen</span>
      <h1>Svindel mot eldre: nyheter, mønstre og hvordan du beskytter deg</h1>
      <p class="lede" style="margin:0 auto;">Vi går gjennom de svindelmetodene som oftest rammer eldre i Norge akkurat nå, basert på nyheter og advarsler fra politiet, bankene og Forbrukerrådet.</p>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="blog-index-list">
        ${sortedPosts.map(postCard).join('\n')}
      </div>
    </div>
  </section>`;

  return page({
    path: '/blogg/',
    title: 'Blogg om svindel mot eldre',
    description: 'Nyheter og forklaringer om svindelmetoder rettet mot eldre i Norge — og hvordan Eldrid kan hjelpe deg vurdere en mistenkelig melding.',
    activePath: '/blogg/',
    bodyHtml: body,
    jsonLdBlocks: [
      breadcrumbLd([
        { name: 'Hjem', path: '/' },
        { name: 'Blogg', path: '/blogg/' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Eldrid-bloggen',
        url: `${site.baseUrl}/blogg/`,
        blogPost: sortedPosts.map(p => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${site.baseUrl}/blogg/${p.slug}/`,
          datePublished: p.date,
        })),
      },
    ],
  });
}

// ---------- blog post ----------

function renderPost(post) {
  const body = `
  <section class="article-header">
    <div class="wrap">
      <div class="breadcrumbs"><a href="/">Hjem</a> / <a href="/blogg/">Blogg</a> / ${esc(post.title)}</div>
      <span class="eyebrow" style="margin-top:20px;">${esc(post.tags[0] || 'Svindel')}</span>
      <h1>${esc(post.title)}</h1>
      <p class="article-meta">Publisert ${dateFormatter.format(new Date(post.date))} av ${esc(site.name)}</p>
    </div>
  </section>
  <article class="article-body wrap">
    <p><em>${esc(post.intro)}</em></p>
    ${post.bodyHtml}

    <div class="callout">
      <h2>Har du en mistenkelig melding akkurat nå?</h2>
      <p>Ta et skjermbilde og del det med Eldrid for en rask, rådgivende vurdering — helt uten skam og uten skjenn. <a href="/#interessert">Meld interesse</a> for tidlig tilgang.</p>
    </div>

    ${post.faq && post.faq.length ? `
    <h2>Ofte stilte spørsmål</h2>
    ${post.faq.map(f => `<details class="faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n')}
    ` : ''}

    <div class="sources">
      <h2>Kilder</h2>
      <ul>
        ${post.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${esc(s.title)}</a></li>`).join('\n')}
      </ul>
    </div>
  </article>`;

  const jsonLdBlocks = [
    breadcrumbLd([
      { name: 'Hjem', path: '/' },
      { name: 'Blogg', path: '/blogg/' },
      { name: post.title, path: `/blogg/${post.slug}/` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: 'nb-NO',
      author: { '@type': 'Organization', name: site.name, url: site.baseUrl },
      publisher: {
        '@type': 'Organization',
        name: site.name,
        logo: { '@type': 'ImageObject', url: `${site.baseUrl}/favicon.svg` },
      },
      mainEntityOfPage: `${site.baseUrl}/blogg/${post.slug}/`,
    },
  ];
  if (post.faq && post.faq.length) {
    jsonLdBlocks.push(faqLd(post.faq));
  }

  return page({
    path: `/blogg/${post.slug}/`,
    title: post.title,
    description: post.description,
    activePath: '/blogg/',
    bodyHtml: body,
    jsonLdBlocks,
  });
}

// ---------- privacy page ----------

function renderPrivacy() {
  const body = `
  <section class="article-header">
    <div class="wrap">
      <span class="eyebrow">Personvern</span>
      <h1>Personvernerklæring</h1>
      <p class="article-meta">Sist oppdatert ${dateFormatter.format(new Date())}</p>
    </div>
  </section>
  <article class="article-body wrap">
    <h2>Hva vi samler inn på denne siden</h2>
    <p>Når du melder interesse via skjemaet på forsiden, lagrer vi navnet, e-postadressen, ev. telefonnummeret og rollen du oppgir (senior, pårørende eller annet), slik at vi kan ta kontakt når Eldrid åpner for flere brukere. Vi lagrer også tidspunktet og hvilken side henvendelsen kom fra, for å holde orden på interesselisten.</p>
    <h2>Hvordan opplysningene brukes</h2>
    <p>Opplysningene brukes utelukkende til å kontakte deg om Eldrid, og deles ikke med tredjeparter til markedsføringsformål. Dataene lagres hos Firebase (Google Cloud) i EU-regionen.</p>
    <h2>Dine rettigheter</h2>
    <p>Du kan når som helst be om innsyn i, retting av eller sletting av opplysningene vi har lagret om deg. Send en e-post til <a href="mailto:${site.email}">${site.email}</a>, så ordner vi det.</p>
    <h2>Selve Eldrid-appen</h2>
    <p>Denne erklæringen gjelder nettsiden eldrid.no. Personvernet i selve Eldrid-appen — inkludert hvordan bilder og meldinger du deler for vurdering behandles — beskrives i appens egen personvernerklæring, som vises ved oppstart av appen.</p>
  </article>`;

  return page({
    path: '/personvern/',
    title: 'Personvernerklæring',
    description: 'Hvordan Eldrid behandler personopplysninger fra interesseskjemaet på eldrid.no.',
    activePath: '/personvern',
    bodyHtml: body,
  });
}

// ---------- sitemap + llms.txt ----------

function renderSitemap() {
  const urls = [
    { path: '/', priority: '1.0' },
    { path: '/blogg/', priority: '0.8' },
    ...sortedPosts.map(p => ({ path: `/blogg/${p.slug}/`, priority: '0.7', lastmod: p.date })),
    { path: '/personvern/', priority: '0.2' },
  ];
  const body = urls
    .map(u => `  <url>\n    <loc>${site.baseUrl}${u.path}</loc>\n${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}    <priority>${u.priority}</priority>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function renderLlmsTxt() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    'Eldrid er en app under utvikling (Norge) der en eldre person deler et skjermbilde av en mistenkelig SMS, e-post, annonse eller profil, og får et rådgivende svar (BEDRAGERI / USIKKER / EKTE) med en konkret anbefaling. Pårørende kan valgfritt kobles til for varsling og en nødknapp. Nettstedet under er en informasjons- og interesseside, ikke selve appen.',
    '',
    '## Sider',
    '',
    `- [Forsiden](${site.baseUrl}/): problemet Eldrid løser, hvordan appen fungerer, og et skjema for å melde interesse.`,
    `- [Blogg](${site.baseUrl}/blogg/): oversikt over artikler om svindelmetoder rettet mot eldre i Norge.`,
    ...sortedPosts.map(p => `- [${p.title}](${site.baseUrl}/blogg/${p.slug}/): ${p.description}`),
    `- [Personvernerklæring](${site.baseUrl}/personvern/)`,
    '',
    '## Kontakt',
    '',
    `E-post: ${site.email}`,
  ];
  return lines.join('\n') + '\n';
}

// ---------- write everything ----------

function write(relPath, content) {
  const full = join(OUT_DIR, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
  console.log('wrote', relPath);
}

// GitHub Pages has no Firebase-Hosting-style cleanUrls rewrite, so trailing-
// slash URLs (/blogg/slug/) are produced by writing an index.html into a
// directory named after the slug, rather than a `slug.html` file -- the same
// "pretty permalinks" trick static site generators use for GitHub Pages.
write('index.html', renderHome());
write('blogg/index.html', renderBlogIndex());
for (const post of posts) {
  write(`blogg/${post.slug}/index.html`, renderPost(post));
}
write('personvern/index.html', renderPrivacy());
write('sitemap.xml', renderSitemap());
write('llms.txt', renderLlmsTxt());

// Custom-domain marker GitHub Pages requires for eldrid.no -- see
// https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
write('CNAME', new URL(site.baseUrl).hostname + '\n');

console.log(`\nDone: ${posts.length} blog posts + home + blog index + privacy page.`);
