import firebase from 'firebase'
require('firebase/firestore')

// Your web app's Firebase configuration
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBnEo2Xsb_0hlZanuJLag3MkY6_61kIh9s',
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: 'starbucks-review',
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  })
}

const db = firebase.firestore()

export default firebase
export { db }
