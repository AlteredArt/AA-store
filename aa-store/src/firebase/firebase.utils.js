import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';
// import { CacheFirst } from "workbox-strategies";

const config = {
    apiKey: "AIzaSyD78tXltNXFhkjn-nmIHMQyScm37BTf28Q",
    authDomain: "aa-db-86810.firebaseapp.com",
    projectId: "aa-db-86810",
    storageBucket: "aa-db-86810.appspot.com",
    messagingSenderId: "272540948889",
    appId: "1:272540948889:web:44fcbd42680a44f9251b08"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('user');

    const snapShot = await userRef.get();
    const collectionSnapShot = await collectionRef.get();
    console.log({collectionSnapShot});

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };


  export const addCollectionsAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef)
  }


  export const auth = firebase.auth();
  export const firestore  = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;