import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { getFirestore } from '@firebase/firestore';

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
  measurementId: VITE_FIREBASE_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyAC8hWd3U77OPAJLMvzK-EftUJKj_J7l98',
//   authDomain: 'monstera-ad980.firebaseapp.com',
//   projectId: 'monstera-ad980',
//   storageBucket: 'monstera-ad980.appspot.com',
//   messagingSenderId: '280388407086',
//   appId: '1:280388407086:web:fe12edb774e31e6fc274bf',
//   measurementId: 'G-MJ29RQ4MTK',
// };

const app = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export const db = getFirestore(app);
