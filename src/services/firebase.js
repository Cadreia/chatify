import firebase from 'firebase';

    const firebaseConfig = {
    apiKey: "AIzaSyB2ul_hPArWa2O5rtyOm3SMFzWtwb0514w",
    authDomain: "chatify-ladda.firebaseapp.com",
    projectId: "chatify-ladda",
    storageBucket: "chatify-ladda.appspot.com",
    messagingSenderId: "573502158471",
    appId: "1:573502158471:web:258bdb9ce5f0279211ea22",
    measurementId: "G-2C0CGSD9HP",
    databaseURL: "https://chatify-ladda-default-rtdb.firebaseio.com/"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    export const auth = firebase.auth;
    export const db = firebase.database();
