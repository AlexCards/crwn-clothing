import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD2obYeB39SjPnMCOEUEE_S_olaWxBYGJI',
  authDomain: 'crwn-clothing-db-570c2.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-570c2.firebaseio.com',
  projectId: 'crwn-clothing-db-570c2',
  storageBucket: 'crwn-clothing-db-570c2.appspot.com',
  messagingSenderId: '176188486048',
  appId: '1:176188486048:web:86bf844fe386a245de34c5',
  measurementId: 'G-85M517SSBY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
