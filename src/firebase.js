// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection , getDocs} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJqsKxKvFSI60CDNmP7y0fYz5XyRjMKLI",
  authDomain: "scoutstock-43056.firebaseapp.com",
  projectId: "scoutstock-43056",
  storageBucket: "scoutstock-43056.appspot.com",
  messagingSenderId: "555910724103",
  appId: "1:555910724103:web:ea8e6a0ad683f80282c8a2",
  measurementId: "G-VWP0X22DGX"
};

const firebaseApp = initializeApp(firebaseConfig);

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
const datacollection = collection(db, 'backtest');


// export utils/refs
export default {
    datacollection,
    getDocs
  }