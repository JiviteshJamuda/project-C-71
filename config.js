import * as firebase from "firebase"

require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByXUINAdhygJweBPnVVODvTG3SqQPZQ1I",
    authDomain: "bedtimestories-e7907.firebaseapp.com",
    databaseURL: "https://bedtimestories-e7907.firebaseio.com",
    projectId: "bedtimestories-e7907",
    storageBucket: "bedtimestories-e7907.appspot.com",
    messagingSenderId: "737376342682",
    appId: "1:737376342682:web:506672d87184eb6199c523",
    measurementId: "G-KJCK7QK7D0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.firestore();