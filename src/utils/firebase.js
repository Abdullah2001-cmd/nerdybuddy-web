import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxBXvtoiRyf82ALBE4WoOJZdE5tKRngWc",
  authDomain: "nerdybuddy-87caa.firebaseapp.com",
  projectId: "nerdybuddy-87caa",
  storageBucket: "nerdybuddy-87caa.firebasestorage.app",
  messagingSenderId: "140721171987",
  appId: "1:140721171987:web:c08066ef4b765a3aae19e6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();