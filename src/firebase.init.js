// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOAxi2sOiIZ4KG2QFysbrXfblKZ47gC58",
    authDomain: "red-onion-projects-256ee.firebaseapp.com",
    projectId: "red-onion-projects-256ee",
    storageBucket: "red-onion-projects-256ee.appspot.com",
    messagingSenderId: "82962962512",
    appId: "1:82962962512:web:bf847e8c5b4df48de6d955",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
