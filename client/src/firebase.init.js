// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqT-5YZc7AMXPsP5F0Dsqvh_BcVr-aG9o",
  authDomain: "genesys-f5552.firebaseapp.com",
  projectId: "genesys-f5552",
  storageBucket: "genesys-f5552.appspot.com",
  messagingSenderId: "978338705182",
  appId: "1:978338705182:web:1310cb6798eb18353e230f",
  measurementId: "G-97VHGDMJLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
