// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9nZ47lOQs09_lHZWuzqYLfEDyT-WBI5g",
  authDomain: "netflixgpt-39ec4.firebaseapp.com",
  projectId: "netflixgpt-39ec4",
  storageBucket: "netflixgpt-39ec4.firebasestorage.app",
  messagingSenderId: "602083956506",
  appId: "1:602083956506:web:f30f5f5c27c8a9aa0fbea3",
  measurementId: "G-J25L3QH8E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();