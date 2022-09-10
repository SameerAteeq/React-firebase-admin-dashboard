import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "react-admin-dashboard-55a4a.firebaseapp.com",
    projectId: "react-admin-dashboard-55a4a",
    storageBucket: "react-admin-dashboard-55a4a.appspot.com",
    messagingSenderId: "353041871301",
    appId: "1:353041871301:web:11edeb301723cd4367dbac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);