// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";  // ✅ Correct import
import { getFirestore } from "firebase/firestore"; 

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA7grrKaElJ18r8XeJTz8K5V15FQSfkomw",
  authDomain: "clone-yt-c9483.firebaseapp.com",
  projectId: "clone-yt-c9483",
  storageBucket: "clone-yt-c9483.appspot.com",  // ✅ Fixed storage bucket
  messagingSenderId: "56597168627",
  appId: "1:56597168627:web:98ff530b5251ae783fd286",
  measurementId: "G-7ZQ3BYYSH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // ✅ Fixed auth initialization
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();