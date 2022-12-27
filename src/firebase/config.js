import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDvunesMxZbq5L7v0TAgbEjmDChWfjk6i4",
    authDomain: "udemy-vue-firebase-sites-4e37f.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-4e37f",
    storageBucket: "udemy-vue-firebase-sites-4e37f.appspot.com",
    messagingSenderId: "1001744063971",
    appId: "1:1001744063971:web:3d68f2a4830e024b2354d6",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init auth
const projectAuth = firebase.auth()

// init firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
