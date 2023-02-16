// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANcSkETXGG8Kg_pqBxKf2Mgd4Wrd6Q7Dg",
  authDomain: "finance2-f9e6e.firebaseapp.com",
  projectId: "finance2-f9e6e",
  storageBucket: "finance2-f9e6e.appspot.com",
  messagingSenderId: "291097485575",
  appId: "1:291097485575:web:7e5ee33f6f55401ec765a2",
  measurementId: "G-G7235PB7Q6"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

