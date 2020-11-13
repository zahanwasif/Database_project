import firebase from 'firebase' ;
var firebaseConfig = {
    apiKey: "AIzaSyCzdLznAW0oB8TjE-wCO1tA_B7guisRE0E",
    authDomain: "dbproject-4c182.firebaseapp.com",
    databaseURL: "https://dbproject-4c182.firebaseio.com",
    projectId: "dbproject-4c182",
    storageBucket: "dbproject-4c182.appspot.com",
    messagingSenderId: "776314596048",
    appId: "1:776314596048:web:899f1db1672f45241f0cd5"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
