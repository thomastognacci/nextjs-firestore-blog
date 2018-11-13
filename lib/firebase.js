import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD97G-wMwZMr1xpQ3HDTR_mg-z8Jdqa5gg",
  authDomain: "react-firestore-trial.firebaseapp.com",
  databaseURL: "https://react-firestore-trial.firebaseio.com",
  projectId: "react-firestore-trial",
  storageBucket: "react-firestore-trial.appspot.com",
  messagingSenderId: "585117482091",
});

var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

var auth = firebase.auth();

export {db, auth};

export default firebaseApp;
