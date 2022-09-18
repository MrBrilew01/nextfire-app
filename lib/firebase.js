import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB0SzdNXCKeB3SAqZPEWr6SGSLxv93_Als",
    authDomain: "nextfire-app-7f118.firebaseapp.com",
    projectId: "nextfire-app-7f118",
    storageBucket: "nextfire-app-7f118.appspot.com",
    messagingSenderId: "883176267415",
    appId: "1:883176267415:web:74000c1af972b1759dd3d2"
  };

if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();