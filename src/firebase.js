// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8_jWKvw4iy3rcSSriDD2DHEjpXmlXCOU",
    authDomain: "clone-ca3c1.firebaseapp.com",
    projectId: "clone-ca3c1",
    storageBucket: "clone-ca3c1.appspot.com",
    messagingSenderId: "600042113623",
    appId: "1:600042113623:web:ddf64fa1b8ee7946ab3112",
    measurementId: "G-V1PG9LDKZM"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  export {db,auth};