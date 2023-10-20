// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD12YuahuHyAAmuMlqgr_c6KxpZ6TP5l4",
  authDomain: "brand-shop-auth-f09b5.firebaseapp.com",
  projectId: "brand-shop-auth-f09b5",
  storageBucket: "brand-shop-auth-f09b5.appspot.com",
  messagingSenderId: "640958003777",
  appId: "1:640958003777:web:d95ee3c4c429b0894024c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth