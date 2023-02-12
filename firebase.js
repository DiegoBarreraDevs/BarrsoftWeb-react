// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjlRN0VoN4xo1PrNUybjfe0hDh_AyGEmE",
  authDomain: "barsoft-web.firebaseapp.com",
  projectId: "barsoft-web",
  storageBucket: "barsoft-web.appspot.com",
  messagingSenderId: "472282465390",
  appId: "1:472282465390:web:8858cd259f077846bb127f",
  measurementId: "G-6PGQ6TBX9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);