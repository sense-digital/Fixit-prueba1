import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAX3dLG9ad_t7EZHQ_ihXAI6A9JSluuIuQ",
    authDomain: "fixit-88405.firebaseapp.com",
    databaseURL: "https://fixit-88405.firebaseio.com",
    projectId: "fixit-88405",
    storageBucket: "fixit-88405.appspot.com",
    messagingSenderId: "247322650476",
    appId: "1:247322650476:web:2942b27439f7bd74"
};
const fire = firebase.initializeApp(config);
// var storage = firebase.storage();

const container = document.getElementById('app')
ReactDOM.render(<App/>,container);