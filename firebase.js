// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP7hGZ-F85VqJd-wVI_1X4p8-AwmgMNjE",
  authDomain: "flip-t.firebaseapp.com",
  projectId: "flip-t",
  storageBucket: "flip-t.appspot.com",
  messagingSenderId: "1030659244307",
  appId: "1:1030659244307:web:a02afb9b72173c1e46dae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);