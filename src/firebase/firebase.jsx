import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcdTxmzIZNovyoby207Apx11rsPTbChzM",
    authDomain: "increase-reading-speed.firebaseapp.com",
    databaseURL: "https://increase-reading-speed.firebaseio.com",
    projectId: "increase-reading-speed",
    storageBucket: "increase-reading-speed.appspot.com",
    messagingSenderId: "1077416707067",
    appId: "1:1077416707067:web:0e81f9069b6ed60c45415e",
    measurementId: "G-ENTQ21756L"
};

firebase.initializeApp(config);

// create user information into the database and store it into cache meanwhile.
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
        level: 0,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

// after testing or training, give the user a new level
export const updateNewLevel = async (userAuth) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
}

// get user's level from database
export const getLevel = async (userAuth) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    try {
        await userRef.get().then(doc => console.log(doc.data()));
        console.log("running in the getLevel")
    } catch (error) {
        console.log(error);
    }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
    await auth.signInWithPopup(provider);
    window.location = "/";
}

export default firebase;