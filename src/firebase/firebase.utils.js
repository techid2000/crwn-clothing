import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEPAUw2Q24bxB9cycpX8FKXKdParJmfQw",
  authDomain: "crwn-db-f095b.firebaseapp.com",
  databaseURL: "https://crwn-db-f095b.firebaseio.com",
  projectId: "crwn-db-f095b",
  storageBucket: "crwn-db-f095b.appspot.com",
  messagingSenderId: "307165424904",
  appId: "1:307165424904:web:3fa21561b60e227ec310bd",
  measurementId: "G-EJ47V4E6BY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch(error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;