import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "webmessanger-afabc.firebaseapp.com",
  projectId: "webmessanger-afabc",
  storageBucket: "webmessanger-afabc.appspot.com",
  messagingSenderId: "171874571215",
  appId: "1:171874571215:web:086c277276c86b8cd0b8ba",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
