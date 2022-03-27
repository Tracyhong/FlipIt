// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0idYaBM9LsP4OrxWvfUB_e1EoEn8TEDo",
//   authDomain: "flipit-39bc4.firebaseapp.com",
//   projectId: "flipit-39bc4",
//   storageBucket: "flipit-39bc4.appspot.com",
//   messagingSenderId: "389891114397",
//   appId: "1:389891114397:web:0b29a68a67e58020261b74"
// };
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
export const db = getFirestore(app);