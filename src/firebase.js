import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAD6micc26TN0Gtw_4h-CjAv8-po75C3MI",
    authDomain: "vishnuram-v.firebaseapp.com",
    projectId: "vishnuram-v",
    storageBucket: "vishnuram-v.appspot.com",
    messagingSenderId: "77016838732",
    appId: "1:77016838732:web:9bbcb520ed7df7e7eabae9",
    measurementId: "G-HJW1D6HBFF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;