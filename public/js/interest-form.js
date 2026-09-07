// "Jeg er interessert" waitlist form (see index.html #interessert).
// Writes to Firestore collection `interestSignups` (allow-create-only rule
// in firestore.rules) via the Firebase modular Web SDK, loaded straight from
// Google's CDN -- no bundler in this static site. Falls back to a mailto:
// link if Firebase isn't configured yet (see firebase-config.js) or if the
// write fails for any reason, so the form never dead-ends a visitor.
import { firebaseConfig, isFirebaseConfigured } from './firebase-config.js';

const form = document.getElementById('interest-form');
if (form) {
  const statusEl = document.getElementById('interest-form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    setStatus('', null);

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const role = String(data.get('role') || '');
    const consent = data.get('consent') === 'on';

    if (!name || !isValidEmail(email) || !role || !consent) {
      setStatus('Sjekk at navn, e-post, hvem du er og samtykket er fylt ut.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sender…';

    try {
      if (!isFirebaseConfigured) {
        throw new Error('not-configured');
      }
      await submitToFirestore({ name, email, phone, role });
      form.hidden = true;
      setStatus(
        'Takk, ' + name.split(' ')[0] + '! Vi tar kontakt på ' + email + ' så snart Eldrid åpner for flere.',
        'success',
      );
    } catch (err) {
      fallbackToMailto({ name, email, phone, role });
      setStatus(
        'Vi kunne ikke sende skjemaet akkurat nå, så vi åpnet en e-post til oss i stedet — send den gjerne, så noterer vi deg manuelt.',
        'error',
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Meld interesse';
    }
  });

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.className = 'form-status' + (kind ? ' ' + kind : '');
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function submitToFirestore({ name, email, phone, role }) {
  const [{ initializeApp }, { getFirestore, collection, addDoc, serverTimestamp }] = await Promise.all([
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'),
  ]);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  await addDoc(collection(db, 'interestSignups'), {
    name,
    email,
    phone: phone || null,
    role,
    consent: true,
    source: 'landing',
    locale: navigator.language || 'nb-NO',
    pageUrl: window.location.href,
    createdAt: serverTimestamp(),
  });
}

function fallbackToMailto({ name, email, phone, role }) {
  const roleLabel = { senior: 'meg selv (senior)', relative: 'en pårørende', other: 'annet' }[role] || role;
  const subject = encodeURIComponent('Interessert i Eldrid');
  const body = encodeURIComponent(
    `Navn: ${name}\nE-post: ${email}\nTelefon: ${phone || '(ikke oppgitt)'}\nMelder interesse på vegne av: ${roleLabel}\n`,
  );
  window.location.href = `mailto:hei@eldrid.no?subject=${subject}&body=${body}`;
}
