// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWVdoP5r5JaVk9YgNdGd2WZ_7yKXQbiYM",
    authDomain: "linkedin-clone-2bac2.firebaseapp.com",
    projectId: "linkedin-clone-2bac2",
    storageBucket: "linkedin-clone-2bac2.appspot.com",
    messagingSenderId: "618884948900",
    appId: "1:618884948900:web:09125c28bf687613595731",
    measurementId: "G-12GE2Q79K6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };