import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCpo_OgLcD9Yc6fma1W4socQ0RKaK7W084",
    authDomain: "react-project-planner.firebaseapp.com",
    databaseURL: "https://react-project-planner.firebaseio.com",
    projectId: "react-project-planner",
    storageBucket: "react-project-planner.appspot.com",
    messagingSenderId: "951151800429"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
