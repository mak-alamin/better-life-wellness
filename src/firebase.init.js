// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHXsC3Ofyt6FdqMrdXS-FCB99-xDx8lzM",
  authDomain: "better-life-wellness.firebaseapp.com",
  projectId: "better-life-wellness",
  storageBucket: "better-life-wellness.appspot.com",
  messagingSenderId: "1078712806095",
  appId: "1:1078712806095:web:41f2d670d1493d99e1e5ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
