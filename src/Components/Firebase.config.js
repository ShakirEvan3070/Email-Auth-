// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZWCO29tEA_1ZqfPe1BubpZVt41Gtvzyw",
  authDomain: "email-password-auth-c31d7.firebaseapp.com",
  projectId: "email-password-auth-c31d7",
  storageBucket: "email-password-auth-c31d7.firebasestorage.app",
  messagingSenderId: "782781771158",
  appId: "1:782781771158:web:4051009a3aee835f2041b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;