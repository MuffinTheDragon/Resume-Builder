// import firebase from "./firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

import("firebase/app")

// var firebase = require("firebase/app");

// require("firebase/auth");
// require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyC5eLpvIwCfHHxiodlURX_R3-b2zNt9_AM",
    authDomain: "cheddar-f2198.firebaseapp.com",
    databaseURL: "https://cheddar-f2198-default-rtdb.firebaseio.com/",
    projectId: "cheddar-f2198",
    storageBucket: "cheddar-f2198.appspot.com",
    messagingSenderId: "201376326453",
    appId: "1:201376326453:web:cbb6e7d3c23f686970e27c",
    // measurementId: "G-D3KQ2YP49X"
};


var app = firebase.initializeApp(firebaseConfig);

console.log(app);

