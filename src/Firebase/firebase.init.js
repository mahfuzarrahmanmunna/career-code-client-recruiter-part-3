// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOm7dzOiRmTgwyRiblr_V9Gczq_wLnOzM",
    authDomain: "career-code-700a7.firebaseapp.com",
    projectId: "career-code-700a7",
    storageBucket: "career-code-700a7.firebasestorage.app",
    messagingSenderId: "1005150189736",
    appId: "1:1005150189736:web:81f8a1b4d1c71d1ab66a9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)