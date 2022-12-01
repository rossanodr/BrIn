// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';

import { getAuth, initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { doc, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7akoKeFh2r1CbnOIs8CADmHpR9yezozs",
  authDomain: "brin-30273.firebaseapp.com",
  projectId: "brin-30273",
  storageBucket: "brin-30273.appspot.com",
  messagingSenderId: "726554622892",
  appId: "1:726554622892:web:1d4c13c346f34cd9b15809",
  measurementId: "G-SWMF9BLE26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
export const storage = getStorage(app);
export const firestore = getFirestore(app);
