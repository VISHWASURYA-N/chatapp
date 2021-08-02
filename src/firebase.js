import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyC8H97m_11MxBG1EZF3IcWf1yZ8dqpx9-I",
    authDomain: "chatapp-73f18.firebaseapp.com",
    projectId: "chatapp-73f18",
    storageBucket: "chatapp-73f18.appspot.com",
    messagingSenderId: "120413452120",
    appId: "1:120413452120:web:714cef3b479dd9d78b572d"
}).auth()
