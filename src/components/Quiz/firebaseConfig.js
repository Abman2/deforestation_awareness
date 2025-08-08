// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your own Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBo6wLA8Jk2QbU8rlQZd0y9IpzrM8EECWI",
  authDomain: "safe-forest-9a379.firebaseapp.com",
  projectId: "safe-forest-9a379",
  storageBucket: "safe-forest-9a379.firebasestorage.app",
  messagingSenderId: "848199143806",
  appId: "1:848199143806:web:182cadaab879227983a32f",
  measurementId: "G-NTYV5E1G2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore DB
export const db = getFirestore(app);
