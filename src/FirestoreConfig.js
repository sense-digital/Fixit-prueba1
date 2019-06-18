import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAX3dLG9ad_t7EZHQ_ihXAI6A9JSluuIuQ",
    authDomain: "fixit-88405.firebaseapp.com",
    databaseURL: "https://fixit-88405.firebaseio.com",
    projectId: "fixit-88405",
    storageBucket: "fixit-88405.appspot.com",
    messagingSenderId: "247322650476",
    appId: "1:247322650476:web:2942b27439f7bd74"
})

let db = firebase.firestore();

export default db;