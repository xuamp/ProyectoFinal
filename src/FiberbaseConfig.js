import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyB_AFfFdAcezFEiw-rL4DtyC_rUwAh0aK0",

  authDomain: "base-nueva-c8b96.firebaseapp.com",

  projectId: "base-nueva-c8b96",

  storageBucket: "base-nueva-c8b96.appspot.com",

  messagingSenderId: "925185255674",

  appId: "1:925185255674:web:2932aebefb90ea2cda4143"

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "Productos");
export const ventasCollection = collection(db, "ventas");
