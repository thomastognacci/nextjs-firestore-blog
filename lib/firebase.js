import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
if (!firebase.apps.length) {
  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD97G-wMwZMr1xpQ3HDTR_mg-z8Jdqa5gg",
    authDomain: "react-firestore-trial.firebaseapp.com",
    databaseURL: "https://react-firestore-trial.firebaseio.com",
    storageBucket: "react-firestore-trial.appspot.com",
    projectId: "react-firestore-trial",
    messagingSenderId: "585117482091",
  });
}
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

var auth = firebase.auth();

var storage = firebase.storage();

export {db, auth, storage};

export default firebaseApp;
