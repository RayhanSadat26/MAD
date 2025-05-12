// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmzFiZ7xvaez6mAnRaOOUqmbNSimTBNbw",
  authDomain: "rayhan-90054.firebaseapp.com",
  projectId: "rayhan-90054",
  storageBucket: "rayhan-90054.firebasestorage.app",
  messagingSenderId: "443504698308",
  appId: "1:443504698308:web:465418af8ccb16fbc97a91",
  measurementId: "G-F8D8XF4L4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=initializeAuth(app,{persistence:getReactNativePersistence(ReactNativeAsyncStorage)});
export const db=getFirestore(app);
