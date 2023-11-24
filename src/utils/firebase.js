// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "quest-blogs.firebaseapp.com",
  projectId: "quest-blogs",
  storageBucket: "quest-blogs.appspot.com",
  messagingSenderId: "822567827189",
  appId: "1:822567827189:web:faae1369ad6aeae39737bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);