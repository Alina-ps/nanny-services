import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { env } from '../utils/env.js';

const firebaseApp = initializeApp({
  apiKey: env('FIREBASE_API_KEY'),
  authDomain: env('FIREBASE_AUTH_DOMAIN'),
  projectId: env('FIREBASE_PROJECT_ID'),
  storageBucket: env('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: env('FIREBASE_MESSAGING_SENDER_ID'),
  appId: env('FIREBASE_APP_ID'),
});

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database };
