import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBgH3T-a5UG_-_NaHAdPGGj37MuZLjLdHk",
  authDomain: "letmeask-4708f.firebaseapp.com",
  databaseURL: "https://letmeask-4708f-default-rtdb.firebaseio.com",
  projectId: "letmeask-4708f",
  storageBucket: "letmeask-4708f.appspot.com",
  messagingSenderId: "1077469852519",
  appId: "1:1077469852519:web:1a1ddb059981271ecbf5c2",
  measurementId: "G-DETYQRMTGP"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database();