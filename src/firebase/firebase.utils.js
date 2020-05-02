import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyD1nVU9LfS6DEH_SBsM1L73nalWSZEDImw",
  authDomain: "crwn-db-e92aa.firebaseapp.com",
  databaseURL: "https://crwn-db-e92aa.firebaseio.com",
  projectId: "crwn-db-e92aa",
  storageBucket: "crwn-db-e92aa.appspot.com",
  messagingSenderId: "912995924515",
  appId: "1:912995924515:web:48471730d9cb09382e4f96"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user' + error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase