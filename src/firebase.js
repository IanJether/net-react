// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi3sb8jSFficaDoE8ddPrr00_Uep_UT24",
  authDomain: "jether-blogs.firebaseapp.com",
  projectId: "jether-blogs",
  storageBucket: "jether-blogs.appspot.com",
  messagingSenderId: "651888601007",
  appId: "1:651888601007:web:57273108b8c4b20b4e315a",
  measurementId: "G-L915HTY6F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;