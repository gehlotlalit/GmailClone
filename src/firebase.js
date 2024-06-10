// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeDS81Fydcbj8iaKc870TciuIE-8iH9Ew",
  authDomain: "clone-e3fee.firebaseapp.com",
  projectId: "clone-e3fee",
  storageBucket: "clone-e3fee.appspot.com",
  messagingSenderId: "222101573869",
  appId: "1:222101573869:web:7efffa75e0b58a178ebce4",
  measurementId: "G-7Q81TD78LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider