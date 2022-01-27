// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmWBB_p10jzPTftLKpQB_sA77-UWTCxWg",
  authDomain: "octavian-landingpage.firebaseapp.com",
  projectId: "octavian-landingpage",
  storageBucket: "octavian-landingpage.appspot.com",
  messagingSenderId: "40300134593",
  appId: "1:40300134593:web:5ca1d3f1cfa8eccd451440",
  measurementId: "G-VP0XD3CZGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);