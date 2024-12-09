// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-blog-bac5b.firebaseapp.com",
  projectId: "next-blog-bac5b",
  storageBucket: "next-blog-bac5b.firebasestorage.app",
  messagingSenderId: "282459795765",
  appId: "1:282459795765:web:9392a74d8014b012c2dc7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);