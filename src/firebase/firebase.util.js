import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBSdgrf91h18UUq8BDxyvBk9Sf8U2IUcdU',
  authDomain: 'e-commerce-81cf3.firebaseapp.com',
  databaseURL: 'https://e-commerce-81cf3.firebaseio.com',
  projectId: 'e-commerce-81cf3',
  storageBucket: 'e-commerce-81cf3.appspot.com',
  messagingSenderId: '854794150943',
  appId: '1:854794150943:web:86f7422aaf48de1049e12a',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//for sign-up users from signup form
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//for using firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

//for making signIn with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
