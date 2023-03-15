// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4hnSnFKfnx2tu2PAokzZZyoXKH5S5spA",
  authDomain: "simple-blog-b9275.firebaseapp.com",
  projectId: "simple-blog-b9275",
  storageBucket: "simple-blog-b9275.appspot.com",
  messagingSenderId: "830503596945",
  appId: "1:830503596945:web:0dcfd1313a84a30a6d6030",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
