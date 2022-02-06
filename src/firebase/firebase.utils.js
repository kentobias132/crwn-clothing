import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
  apiKey: 'AIzaSyDTF6zF16v5u-IjWbypi2YvD8busgvBd_s',
  authDomain: 'crwn-clothing-1c87c.firebaseapp.com',
  projectId: 'crwn-clothing-1c87c',
  storageBucket: 'crwn-clothing-1c87c.appspot.com',
  messagingSenderId: '785579536950',
  appId: '1:785579536950:web:b14df513a7e511e6a89e97',
  measurementId: 'G-NC2KJX1QSM',
}

export const createUserProfileDoc = async (userAuth, additionalDAta) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth

    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalDAta,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
