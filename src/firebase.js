import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyC61XMn_2QUuxjo9Q8Y1h8SoxDU0F6taD8",
    authDomain: "blog-comments-aecac.firebaseapp.com",
    projectId: "blog-comments-aecac",
    storageBucket: "blog-comments-aecac.appspot.com",
    messagingSenderId: "455750817428",
    appId: "1:455750817428:web:32e4e04fd3c97314ecc681",
    measurementId: "G-LH22HG861R"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const firestore = firebase.firestore()

export default firebase
