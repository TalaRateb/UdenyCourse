
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeEee4P_PC44YrQitMA4qtpmNzr7EXFfA",
  authDomain: "course-65c38.firebaseapp.com",
  projectId: "course-65c38",
  storageBucket: "course-65c38.appspot.com", // Corrected storage bucket format
  messagingSenderId: "907965397893",
  appId: "1:907965397893:web:492b946bee036fdf4c22ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Firebase Authentication
export const db = getFirestore(app); // Firestore Database