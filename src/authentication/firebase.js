// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fir-auth-react-d355e.firebaseapp.com",
  projectId: "fir-auth-react-d355e",
  storageBucket: "fir-auth-react-d355e.appspot.com",
  messagingSenderId: "150290593425",
  appId: "1:150290593425:web:cf406399d8e2d3a7907130",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
