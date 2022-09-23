
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';




const firebaseConfig = {
    apiKey: "AIzaSyA7abzwk3L15Ei2CDKOL9TKM_sH7RbTsvg",
    authDomain: "weatherapp-4dde4.firebaseapp.com",
    projectId: "weatherapp-4dde4",
    storageBucket: "weatherapp-4dde4.appspot.com",
    messagingSenderId: "482959936097",
    appId: "1:482959936097:web:c9a36392e11b0decb6f820"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();



