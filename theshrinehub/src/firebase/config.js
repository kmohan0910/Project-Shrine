import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9EgdJ3pZbAiyAW9sfVG01IT3xOZCA9A4",
  authDomain: "theshrinehub.firebaseapp.com",
  projectId: "theshrinehub",
  storageBucket: "theshrinehub.appspot.com",
  messagingSenderId: "791781842467",
  appId: "1:791781842467:web:8fb8b952f600db2f035b96"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }