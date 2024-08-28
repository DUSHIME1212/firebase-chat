// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-24813.firebaseapp.com",
  projectId: "reactchat-24813",
  storageBucket: "reactchat-24813.appspot.com",
  messagingSenderId: "823287790292",
  appId: "1:823287790292:web:7cd7874ca5b8b0a7295941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()