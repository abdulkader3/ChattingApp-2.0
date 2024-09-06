// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARvvvNLzCfcT9pQ0eJ2P42__S2_XxGgZA",
  authDomain: "exam-859c5.firebaseapp.com",
  projectId: "exam-859c5",
  storageBucket: "exam-859c5.appspot.com",
  messagingSenderId: "129657557028",
  appId: "1:129657557028:web:cee6cdbaefd565770e48b1",
  measurementId: "G-V75VSYHEG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default (app)