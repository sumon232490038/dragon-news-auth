// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg7SEakmNKp8kUjKnAK5tvUwP6JhN14GQ",
  authDomain: "dragon-news-auth-711d3.firebaseapp.com",
  projectId: "dragon-news-auth-711d3",
  storageBucket: "dragon-news-auth-711d3.firebasestorage.app",
  messagingSenderId: "296504178145",
  appId: "1:296504178145:web:b47b5ad748395cd4da4ea0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
