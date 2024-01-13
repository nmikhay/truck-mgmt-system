
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC_D73RwKiBFb7Tbl8YhGz-C2kCgSFX2Lk",
  authDomain: "insta-clone-c4f6b.firebaseapp.com",
  projectId: "insta-clone-c4f6b",
  storageBucket: "insta-clone-c4f6b.appspot.com",
  messagingSenderId: "694110502151",
  appId: "1:694110502151:web:ed951610251cc26921d9a2",
  measurementId: "G-HEXB8K7Y1B"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, storage, firestore};