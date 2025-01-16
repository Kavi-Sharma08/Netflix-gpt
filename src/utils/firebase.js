// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi5AtESsv9Kkyy42H1NdJUkOYKF7zoZZ8",
  authDomain: "netflix-gpt-5e55c.firebaseapp.com",
  projectId: "netflix-gpt-5e55c",
  storageBucket: "netflix-gpt-5e55c.firebasestorage.app",
  messagingSenderId: "297477188320",
  appId: "1:297477188320:web:de7a262c144c5a7f347e85",
  measurementId: "G-VCHG039LBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();