import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVuQGNwUXGD_2saKljmitDHrzCgWQhR9Q",
  authDomain: "photofolio-2b710.firebaseapp.com",
  projectId: "photofolio-2b710",
  storageBucket: "photofolio-2b710.appspot.com",
  messagingSenderId: "846633689055",
  appId: "1:846633689055:web:76168b1ac3864d80ed6e6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
