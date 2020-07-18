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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // si retorna null retornamos
  if (!userAuth) return;

  // Obtener la referencia de si el objeto existe en base de datos
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const date = new Date();

    // const day = date.getDate();
    // const month = date.getMonth() + 1;
    // const year = date.getFullYear();

    const createdAt = date;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User", error.message);
    }
  }

  return userRef;
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
