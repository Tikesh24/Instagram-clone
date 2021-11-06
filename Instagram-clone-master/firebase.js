// Import the functions you need from the SDKs you need
import { initializeApp , getApps, getApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDThyKPWH_I0Qf_5gJSQaQs68b23qpF3YM",
  authDomain: "instagram-1c78b.firebaseapp.com",
  projectId: "instagram-1c78b",
  storageBucket: "instagram-1c78b.appspot.com",
  messagingSenderId: "400372209338",
  appId: "1:400372209338:web:2320ddd3bd44afce7a1483",
  measurementId: "G-T29DCNQZWL"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage} ;