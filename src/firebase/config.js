// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import * as firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/firestore';
import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAuBLiMU_gBTIReCTFnYkpOyA0EfjOqOgI",
  authDomain: "darqba-b5273.firebaseapp.com",
  projectId: "darqba-b5273",
  storageBucket: "darqba-b5273.appspot.com",
  messagingSenderId: "170640110079",
  appId: "1:170640110079:web:827118ac4c8738d19bb7ca",
  measurementId: "G-VTNK6KQ23K"
};

// init firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }