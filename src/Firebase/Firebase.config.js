// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_AUTH_APIKEY,
    authDomain: import.meta.env.VITE_AUTH_AUTHDOMAIN,
    projectId: import.meta.env.VITE_AUTH_PROJECTID,
    storageBucket: import.meta.env.VITE_AUTH_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_AUTH_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_AUTH_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
