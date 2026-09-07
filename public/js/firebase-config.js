// Public Firebase web config for the eldrid.no marketing site. A Firebase
// web API key is not a secret (access is enforced by firestore.rules, not by
// hiding this file) -- but it does need to point at a real registered web
// app before the interest form will actually write anywhere.
//
// TODO: replace with the real values once a Web app is registered for the
// "seniorvakt" Firebase project (Firebase Console -> Project settings ->
// Your apps -> Add app -> Web). Until then interest-form.js detects the
// placeholder apiKey and falls back to a mailto: link instead of silently
// failing.
export const firebaseConfig = {
  apiKey: 'REPLACE_WITH_FIREBASE_API_KEY',
  authDomain: 'seniorvakt.firebaseapp.com',
  projectId: 'seniorvakt',
  storageBucket: 'seniorvakt.firebasestorage.app',
  appId: 'REPLACE_WITH_FIREBASE_APP_ID',
};

export const isFirebaseConfigured = firebaseConfig.apiKey !== 'REPLACE_WITH_FIREBASE_API_KEY';
