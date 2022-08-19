import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "Domain",
  projectId: "ecommerce-id",
  storageBucket: "ecommerce-id.com",
  messagingSenderId: "ID",
  appId: "App_ID",
  measurementId: "G-ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB