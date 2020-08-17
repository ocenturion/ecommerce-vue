import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyCD5AMUkCf7qWTnSYCixx41PtxmCE56XtE",
    authDomain: "miproyectoecommerce-cb448.firebaseapp.com",
    databaseURL: "https://miproyectoecommerce-cb448.firebaseio.com",
    projectId: "miproyectoecommerce-cb448",
    storageBucket: "miproyectoecommerce-cb448.appspot.com",
    messagingSenderId: "386804282448",
    appId: "1:386804282448:web:338ac01421b4a7b3b94d55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  const functions = firebase.functions()
  
  export {
      firebase,
      auth,
      db,
      storage,
      functions,
  }