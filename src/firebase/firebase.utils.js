import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAPAdmiKrf5EvjXo0kWzdKDjfXa6YEMAR0",
  authDomain: "crwn-db-b21c8.firebaseapp.com",
  databaseURL: "https://crwn-db-b21c8.firebaseio.com",
  projectId: "crwn-db-b21c8",
  storageBucket: "",
  messagingSenderId: "344573311940",
  appId: "1:344573311940:web:7c287cb73f4db6de"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;