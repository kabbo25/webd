// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUKJJifEo6HWhv_dvXkV8UJdZmrnQCj5E",
    authDomain: "assignment-ten-824de.firebaseapp.com",
    projectId: "assignment-ten-824de",
    storageBucket: "assignment-ten-824de.appspot.com",
    messagingSenderId: "1031600894226",
    appId: "1:1031600894226:web:d721ba32f2b534626603cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;