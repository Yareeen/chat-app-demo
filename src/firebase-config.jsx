
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA98U96H36Jbho1MShg_WEL6-vvWYUZ_hI",
  authDomain: "chat-5f76c.firebaseapp.com",
  projectId: "chat-5f76c",
  storageBucket: "chat-5f76c.appspot.com",
  messagingSenderId: "256536754724",
  appId: "1:256536754724:web:cf802e5625acab881ef6b1",
  measurementId: "G-ZDYTYZK7ZC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
