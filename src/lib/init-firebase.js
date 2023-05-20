// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  // measurementId:process.env.REACT_APP_MEASUREMENT_ID
};


// REACT_APP_FIREBASE_API_KEY=AIzaSyBmSsGL7zlsp7JWH6plG-WYXrhRRLc0UBs
// REACT_APP_FIREBASE_AUTH_DOMAIN=finovate-e165c.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=finovate-e165c
// REACT_APP_FIREBASE_STORAGE_BUCKET=finovate-e165c.appspot.com
// REACT_APP_MESSAGING_SENDER=186954426095
// REACT_APP_APP_ID=1:186954426095:web:4ec4d51add0bfefe6f5d1a
// REACT_APP_MEASUREMENT_ID=G-V145FK4NC0

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
// export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;