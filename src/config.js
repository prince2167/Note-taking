import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBinqVGdGUUWnRsDa7QY-KZkKfakQr_V54",
  authDomain: "note-taking-app-a4e6f.firebaseapp.com",
  projectId: "note-taking-app-a4e6f",
  storageBucket: "note-taking-app-a4e6f.appspot.com",
  messagingSenderId: "136198606355",
  appId: "1:136198606355:web:65114b6661aa32c9c679e6",
  measurementId: "G-026ZBBC17V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
