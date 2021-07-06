import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD78tXltNXFhkjn-nmIHMQyScm37BTf28Q",
    authDomain: "aa-db-86810.firebaseapp.com",
    projectId: "aa-db-86810",
    storageBucket: "aa-db-86810.appspot.com",
    messagingSenderId: "272540948889",
    appId: "1:272540948889:web:44fcbd42680a44f9251b08"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;