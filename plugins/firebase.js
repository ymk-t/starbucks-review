import firebase from 'firebase'

  // Your web app's Firebase configuration
  if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBnEo2Xsb_0hlZanuJLag3MkY6_61kIh9s",
        authDomain: "starbucks-review.firebaseapp.com",
        databaseURL: "https://starbucks-review.firebaseio.com",
        projectId: "starbucks-review",
        storageBucket: "",
        messagingSenderId: "847390749773",
        appId: "1:847390749773:web:c2dd142d5b6bc7a7649804"
    })
  }

export default firebase