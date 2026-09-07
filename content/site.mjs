// Shared site-wide constants used by build.mjs to render every page.
// Edit here (not in public/**/*.html) and re-run `node build.mjs`.

export const site = {
  name: 'Eldrid',
  baseUrl: 'https://eldrid.no',
  tagline: 'Usikker på en melding? Spør Eldrid.',
  description:
    'Eldrid er en digital rådgiver som hjelper eldre og deres pårørende å vurdere om en SMS, e-post eller melding er svindel — på sekunder, uten skam eller skjenn.',
  locale: 'nb_NO',
  email: 'hei@eldrid.no',
  colors: {
    background: '#FAF9F5',
    surface: '#FFFFFF',
    border: '#E3E1DA',
    text: '#1F1D1A',
    textMuted: '#6B6862',
    primary: '#206F7E',
    onPrimary: '#FFFFFF',
    accent: '#C8793C',
    accentSurface: '#F7E8D9',
    danger: '#B3261E',
    dangerSurface: '#FBEAE9',
    warning: '#8A5A00',
    warningSurface: '#FBF1DF',
    safe: '#1E5C3B',
    safeSurface: '#EAF3EC',
  },
};

export const nav = [
  { href: '/', label: 'Hjem' },
  { href: '/#slik-fungerer-det', label: 'Slik fungerer det' },
  { href: '/blogg/', label: 'Blogg' },
  { href: '/#interessert', label: 'Meld interesse' },
];
