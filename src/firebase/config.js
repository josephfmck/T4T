//*Firebase setup
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

//auth
export const firebaseAuth = getAuth(firebaseApp);
//firestore
export const db = getFirestore(firebaseApp);
//storage
export const storage = getStorage(firebaseApp);