// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwkFDFRyKG7KwATUHXne6vaV_Tbx618y0",
  authDomain: "netflixgpt-8a0d2.firebaseapp.com",
  projectId: "netflixgpt-8a0d2",
  storageBucket: "netflixgpt-8a0d2.firebasestorage.app",
  messagingSenderId: "295166390118",
  appId: "1:295166390118:web:12b444d9deae71e37c62a7",
  measurementId: "G-Q3E6Y1FQEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();
export const auth = getAuth();
