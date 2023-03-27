// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ2kRFkQ8mW8gPN5KDeoEayiCBFhQ2ywQ",
  authDomain: "singing-b9093.firebaseapp.com",
  projectId: "singing-b9093",
  storageBucket: "singing-b9093.appspot.com",
  messagingSenderId: "583863556577",
  appId: "1:583863556577:web:13f2369415799246961aa0",
  measurementId: "G-5LVMPE4H68"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);