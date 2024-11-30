// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFct95sekyq1ITY4Wt98_wySyYreOnWw",
  authDomain: "netflix-gpt-e40cc.firebaseapp.com",
  projectId: "netflix-gpt-e40cc",
  storageBucket: "netflix-gpt-e40cc.firebasestorage.app",
  messagingSenderId: "600720327639",
  appId: "1:600720327639:web:20497211286a88e5a54192",
  measurementId: "G-GLSW3K1ST0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);