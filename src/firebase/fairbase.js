// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmf3C3I0Zvnkl6GHy1dTWE9hl9ohCoNg",
  authDomain: "camperapp-907de.firebaseapp.com",
  projectId: "camperapp-907de",
  storageBucket: "camperapp-907de.appspot.com",
  messagingSenderId: "1005375099423",
  appId: "1:1005375099423:web:1e0f15e400d78cafcafb2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// console.log(auth);
