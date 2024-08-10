// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ZEOeJmW_NmoF1XLqh3_qmFFUFxNg-PA",
  authDomain: "mobile-build.firebaseapp.com",
  databaseURL: "https://mobile-build-default-rtdb.firebaseio.com",
  projectId: "mobile-build",
  storageBucket: "mobile-build.appspot.com",
  messagingSenderId: "965668720925",
  appId: "1:965668720925:web:e222e24b9cc8fa712ed1f4",
  measurementId: "G-KFXVKKFLHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
