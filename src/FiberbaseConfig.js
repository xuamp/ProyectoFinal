import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOfkUcBrZT_iB_6OogHcS3KHdG9EdngwU",

  authDomain: "base01-dami.firebaseapp.com",

  projectId: "base01-dami",

  storageBucket: "base01-dami.appspot.com",

  messagingSenderId: "817270566875",

  appId: "1:817270566875:web:3002da49195fe7a2d941fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "Productos");
export const ventasCollection = collection(db, "ventas");
