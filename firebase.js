// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXletpfqthtOdAfR8dVesf9yL-4e7CGXw",
  authDomain: "aangan-website-57e85.firebaseapp.com",
  projectId: "aangan-website-57e85",
  storageBucket: "aangan-website-57e85.firebasestorage.app",
  messagingSenderId: "980420981146",
  appId: "1:980420981146:web:9fce73c48380e0b57c4a23",
  measurementId: "G-JLF1E8ZEYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export Firebase services
export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};