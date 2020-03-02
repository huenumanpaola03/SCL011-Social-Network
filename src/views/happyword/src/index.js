import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyAMCCgrIaOkkYakgMqiHzKsxmFyS221_pI",
    authDomain: "red-social-happy-world.firebaseapp.com",
    databaseURL: "https://red-social-happy-world.firebaseio.com",
    projectId: "red-social-happy-world",
    storageBucket: "red-social-happy-world.appspot.com",
    messagingSenderId: "975564817227",
    appId: "1:975564817227:web:1199d9c654687bb93cdece",
    measurementId: "G-21B1CGNGEQ"
});


ReactDOM.render(
<App />, 
document.getElementById('root'));

serviceWorker.unregister();
