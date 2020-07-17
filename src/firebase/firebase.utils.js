import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAgCkOB2lE0PA98rrNGkHNFUM29KtSzDS8",
  authDomain: "crwn-db-daniel.firebaseapp.com",
  databaseURL: "https://crwn-db-daniel.firebaseio.com",
  projectId: "crwn-db-daniel",
  storageBucket: "crwn-db-daniel.appspot.com",
  messagingSenderId: "715166020661",
  appId: "1:715166020661:web:23c00124c7d93424572d7c",
  measurementId: "G-QZ2X6VJ4YZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth Provider PopUp
const provider = new firebase.auth.GoogleAuthProvider();
// Triggers the select accounts Google popup
provider.setCustomParameters({ promt: "select_account" });

// signInWithPopup takes as a param provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
