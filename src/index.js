import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import App from './components/App';

// var firebaseConfig = {
//     apiKey: "AIzaSyAX3dLG9ad_t7EZHQ_ihXAI6A9JSluuIuQ",
//     authDomain: "fixit-88405.firebaseapp.com",
//     databaseURL: "https://fixit-88405.firebaseio.com",
//     projectId: "fixit-88405",
//     storageBucket: "fixit-88405.appspot.com",
//     messagingSenderId: "247322650476",
//     appId: "1:247322650476:web:2942b27439f7bd74"
//   };
// firebase.initalizeApp(firebaseConfig);
// var db = firebase.firestore();

const container = document.getElementById('app')

ReactDOM.render(<App/>,container);