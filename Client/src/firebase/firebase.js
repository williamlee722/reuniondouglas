// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-LhwgaMwZUAKjFv22tRlSoZpo3EdcrUk",
  authDomain: "reuniondouglas.firebaseapp.com",
  projectId: "reuniondouglas",
  storageBucket: "reuniondouglas.appspot.com",
  messagingSenderId: "1083550908417",
  appId: "1:1083550908417:web:04e4ad6e554241abc24000",
  measurementId: "G-2PSNRY2XY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;